import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map:any;
  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap()
    }, 2000);    
  }

  private initMap():void {
    this.map = L.map('map').setView([32.333,44.444],10);

    // var map = L.map('map').setView([51.505, -0.09], 13);

    const tiles =L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }
}
