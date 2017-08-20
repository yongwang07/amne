import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GoogleMapService } from './googleMapService';

export interface Location {
  latitude: number;
  longitude: number;
  isOpen?: boolean;
  name?: string;
  addr?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Austin: Location = {latitude: 30.2672, longitude: -97.7431};
  zoom = 10;
  locations: Location[] = new Array(2);
  agencies: Location[] = [];
  @ViewChildren('address') inputs: QueryList<ElementRef>;
  constructor(private ngZone: NgZone, private googleMapService: GoogleMapService) { }
  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => this.zoom = this.zoom);
    }
    this.googleMapService.register(() => {
      this.inputs.forEach((element, idx) => {
        this.googleMapService.bindAutoCompleteInput(element, (latitude, longitude) => {
          this.locations[idx] = {latitude, longitude};
        })
      });
    });
  }
  onchange($event: any, idx: number) {
    if (!$event.target.value) {
      this.agencies.length = 0;
      this.locations[idx] = null;
    };
  }
  private transform(arr, idx) {
    const baseA = new google.maps.LatLng(this.locations[0].latitude, this.locations[0].longitude);
    const baseB = new google.maps.LatLng(this.locations[1].latitude, this.locations[1].longitude);
    const base = idx === 0 ? baseA : baseB;
    return  arr.filter(loc => this.calcDistance(base, loc.geometry.location) <= 10)
               .map(location => ({
                    id:    location.id,
                    name: location.name,
                    addr:  location.formatted_address.replace(', United States', ''),
                    longitude: location.geometry.location.lng(),
                    latitude:  location.geometry.location.lat(),
                    distanceSum:   this.calcDistance(location.geometry.location, baseA) +
                           this.calcDistance(location.geometry.location, baseB)
            }));
  }
  search() {
    this.agencies.length = 0;
    Observable.forkJoin(
      this.googleMapService.searchAgentObserver(this.locations[0]),
      this.googleMapService.searchAgentObserver(this.locations[1]),
      (a, b) => [a[0], b[0]])
      .subscribe(([nearA, nearB]) => {
        this.ngZone.run(() => {
          this.agencies = [...this.transform(nearA, 0), ...this.transform(nearB, 1)]
              .sort((a, b) => a.distanceSum - b.distanceSum)
              .filter((loc, idx, arr) => !(idx > 1 && arr[idx - 1].id === loc.id))
              .map(loc => ({
                          name: loc.name,
                          addr: loc.addr,
                          isOpen: false,
                          longitude: loc.longitude,
                          latitude: loc.latitude}));
            });
      });
  }
  clickedMarker(idx) {
    this.agencies.forEach((agent, i) => agent.isOpen = idx === i);
  }
  private calcDistance(p1, p2) {
    return (Math.round((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000 * 0.6214 * 10)) / 10);
  }
}
