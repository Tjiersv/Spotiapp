import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any;
  pistas: any[];

  constructor( private activateRoute: ActivatedRoute,
               private _spotifyService: SpotifyService) { }

  ngOnInit() {

    this.activateRoute.params
        .map( parametros => parametros['id'])
        .subscribe( id => {

          this._spotifyService.getArtista(id)
              .subscribe( data => this.artista = data );

          this._spotifyService.getTop(id)
              .subscribe( data => this.pistas = data );

        });

  }

}
