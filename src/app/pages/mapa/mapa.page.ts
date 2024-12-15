import { Component, OnInit } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
import { map } from 'rxjs';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  latitude: number = -33.4330583;
  longitude: number = -70.6154230440881;

  ngOnInit() {
    this.getLocationAndShowOnMap();
  }


  //HASTA ACÁ

  async getLocationAndShowOnMap() {
    try {
      //Verificar permisos
      const permissions: PermissionStatus = await Geolocation.checkPermissions();

      if (permissions.location !== 'granted') {
        const requestPermissions = await Geolocation.requestPermissions();
        if (requestPermissions.location != 'granted') {
          alert('Permiso de ubicación denegado');
          return;
        }
      }

      // Obtener la ubicación
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      //const latitude = position.coords.latitude;
      //const longitude = position.coords.longitude;

      //alert(latitude+" "+longitude);

      // Mostrar la ubicación en el mapa
      const mapFrame: HTMLIFrameElement | null = document.getElementById(
        'mapFrame'
      ) as HTMLIFrameElement;

      if (mapFrame) {
        mapFrame.src = `https://www.google.com/maps?q=${this.latitude},${this.longitude}&output=embed`;
      }

    }catch (error){
      alert('Error al obtener la ubicación '+error);
    }
  }

  //HASTA AQUÍ

  

}
