import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Hls from 'hls.js'

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit, AfterViewInit{

  @ViewChild("streamVideo", { static: false }) streamvideo: any;

  constructor() { }

  ngOnInit(): void {
  }

  async ngAfterViewInit() {

    if (Hls.isSupported()) {
      let hls = new Hls();
      hls.loadSource('https://live.nibaldonoso.fr:3002/live/test/index.m3u8');
      hls.attachMedia(this.streamvideo.nativeElement);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        this.streamvideo.nativeElement.play();
      });

    }
  }
}
