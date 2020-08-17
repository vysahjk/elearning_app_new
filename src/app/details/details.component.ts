import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  @ViewChild("myVideo", { static: false }) video: any;

  listvideosmenu: string[];
  listvideos: string[];
  cours_actuel: string = this.router.url.split('/')[2];
  videoactuel: string;

  constructor(
    private streamService: StreamService,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.streamService.getListVideos(this.cours_actuel)
      .then(res => res.json())
      .then(data => {
        this.listvideos = data;
        this.listvideosmenu = data.map((video) => video.replace(/^0[0-9]_/, '').replace(".mp4", "").split("_").join(" "));
        this.videoactuel = this.listvideosmenu[0];
        this.video.nativeElement.setAttribute('src', `https://nibaldonoso.fr:4100/${this.cours_actuel}/${data[0]}`);
        this.video.nativeElement.volume = 0.5;
        this.showVideo(this.videoactuel, 0);
      })

  }

  showVideo(video, index) {
    this.videoactuel = video;
    this.video.nativeElement.setAttribute('src', `https://nibaldonoso.fr:4100/${this.cours_actuel}/${this.listvideos[index]}`);
    this.video.nativeElement.volume = 0.5;
    this.video.nativeElement.play();

    this.video.nativeElement.addEventListener('timeupdate', () => {
      if (this.video.nativeElement.ended) {
        index++;
        if (index < this.listvideos.length) {
          this.videoactuel = this.listvideosmenu[index];
          this.video.nativeElement.setAttribute('src', `https://nibaldonoso:4100/${this.cours_actuel}/${this.listvideos[index]}`);
          this.video.nativeElement.volume = 0.5;
          this.video.nativeElement.play();
        } else {
          // console.log("terminé");
        }

      }
    })
  }

}
