import { Component, OnInit } from '@angular/core';

import { Category } from '../_model/Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	categories: Category[];

  constructor(
  	private categoryService: CategoryService
  	) { }

  ngOnInit() {
	  this.getAll();
  }

  getAll() {
	  this.categoryService.getAll().subscribe(categories => this.categories = categories);
  }
}