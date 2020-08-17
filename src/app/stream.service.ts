import { Injectable } from '@angular/core';
import fetch from 'node-fetch'


@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor() { }

  async getListVideos(cours_name: string) {
    return await fetch(`https://nibaldonoso.fr:4100/list/cours/${cours_name}`);
  }

  async getListCours() {
    return await fetch(`https://nibaldonoso.fr:4100/list/cours`);
  }

}
