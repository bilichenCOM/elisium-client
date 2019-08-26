import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from './_model/Category'
import { CATEGORIES } from './mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getById(id: number): Category {
	  return null;
  }

  getAll(): Observable<Category[]> {
	  return of(CATEGORIES);
  }
}