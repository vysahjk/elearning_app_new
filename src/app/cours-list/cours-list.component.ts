import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {

  @Input() src: string;
  @Input() title: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
