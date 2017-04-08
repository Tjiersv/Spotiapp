import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  artistas: any [] = [];
  urlBusqueda = 'https://api.spotify.com/v1/search';
  constructor() { }

  getArtist( termino: string ) {

    let query = `q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

  }

}
