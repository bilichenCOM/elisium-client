import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './_model/Item';
import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getById(id: number): Item {
	  return null;
  }

  getAll(): Observable<Item[]> {
	  return of(ITEMS);
  }
}