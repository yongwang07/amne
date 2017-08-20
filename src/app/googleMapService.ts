import { Injectable } from '@angular/core';
import { MapsAPILoader} from '@agm/core';
import { NgZone, ElementRef } from '@angular/core';
import {  } from 'googlemaps';
import { Location } from './app.component';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GoogleMapService {
    Austin: Location = {latitude: 30.2672, longitude: -97.7431};
    init: Promise<void>;
    placeService: any;
    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
        this.init = mapsAPILoader.load();
        this.init.then(() => {
            const map = new google.maps.Map(document.createElement('div'), {
                center: {lat: this.Austin.latitude, lng: this.Austin.longitude},
              });
              this.placeService = new google.maps.places.PlacesService(map);
        });
    }
    register(cb) {
        this.init.then(() => cb.apply(null));
    }
    bindAutoCompleteInput(element: ElementRef, cb: (lat: number, lng: number) => void) {
        this.init.then(() => {
            const inputAuto = new google.maps.places.Autocomplete(element.nativeElement, {
                bounds: new google.maps.LatLngBounds(
                    new google.maps.LatLng(30.135030, -97.960088),
                    new google.maps.LatLng(30.522045, -97.546727)),
                types: ['geocode'],
                componentRestrictions: {country: 'US'}
              });
            inputAuto.addListener('place_changed', () => {
                this.ngZone.run(() => {
                  const place = inputAuto.getPlace();
                  if (!!place.geometry) {
                      cb(place.geometry.location.lat(), place.geometry.location.lng());
                  }
                });
              });
        });
    }
    searchAgentObserver(location: Location) {
        const option = {
            rankBy: google.maps.places.RankBy.DISTANCE,
            query: 'real estate agent',
            location: new google.maps.LatLng(location.latitude, location.longitude)
        }
        return Observable.bindCallback(this.placeService.textSearch.bind(this.placeService, option)).call(null);
    }
}
