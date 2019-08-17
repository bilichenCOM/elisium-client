import { Component, OnInit } from '@angular/core';

import { Item } from '../_model/Item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	items: Item[];

  constructor(
  	private itemService: ItemService
  	) { }

  ngOnInit() {
	  this.getAll();
  }

  getAll() {
	  this.itemService.getAll().subscribe(items => this.items = items);
  }
}