import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arm-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  @Input()
  characterSheet: any;

  constructor() { }

  ngOnInit() {
  }

}
