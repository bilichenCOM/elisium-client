import { Category } from './Category';

export class Item {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	manufacturer: string;
	category: Category;
	price: number;
}