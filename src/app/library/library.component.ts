import { Component } from '@angular/core';
import { SongService} from "../service/SongService";
import Song from '../model/Song';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class LibraryComponent {
  songs: Song[] = [
    {name: 'Aquarium', file: 'assets/mp3_files/Aquarium.mp3'},
    {name: 'Gothamlicious', file: 'assets/mp3_files/Gothamlicious.mp3'},
    {name: 'Laserpack', file: 'assets/mp3_files/Laserpack.mp3'},
    {name: 'The Ice Giants', file: 'assets/mp3_files/The_Ice_Giants.mp3'}
  ];
  song: Song;

  constructor(private songService: SongService) { }

  updateSong(song: Song) {
    this.songService.updateSong(song);
  }
}
