import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
