import { Item } from './Item';

export class Category {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	items: Item[];
}