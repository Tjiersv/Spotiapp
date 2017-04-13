import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any [] = [];
  urlBusqueda = 'https://api.spotify.com/v1/search';
  urlArtista = 'https://api.spotify.com/v1/artists';

  constructor( private http: Http ) { }

  getArtist( termino: string ) {

    const QUERY = `?q=${termino}&type=artist`;
    const URL = this.urlBusqueda + QUERY;

    return this.http.get( URL ).map( res => {
      this.artistas = res.json().artists.items;
    });
  }

  getArtista( id: string ) {

    const QUERY = `/${id}`;
    const URL = this.urlArtista + QUERY;

    return this.http.get( URL )
                    .map( res => {
                      console.log(res.json());
                      return res.json();
                    });
  }

  getTop( id: string ) {

    const QUERY = `/${id}/top-tracks?country=US`;
    const URL = this.urlArtista + QUERY;

    return this.http.get( URL )
                    .map( res => {
                      console.log(res.json().tracks);
                      return res.json().tracks;
                    });
  }

}
