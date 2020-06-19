import { Component, OnInit } from '@angular/core';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  listcours: string[];
  listphotos: string[];

  constructor(private streamService: StreamService) { }

  ngOnInit(): void {

    this.streamService.getListCours()
      .then(res => res.json())
      .then(data => {
        this.listcours = data;
      })

    this.listphotos = [
      "https://i.imgur.com/ojVE9eQ.mp4",
      "https://i.imgur.com/iL4TlmD.mp4",
      "https://i.imgur.com/0BrCGsa.mp4",
      "https://i.imgur.com/tBHgTg8.mp4"
    ]

  }

}
