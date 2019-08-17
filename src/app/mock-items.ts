import { Item } from './_model/Item';
import { CATEGORIES } from './mock-categories';

export const ITEMS: Item[] = [
	{ id: 1, name: 'BrowneyWood', description: 'A good choice for your gramma', imageUrl: 'https://image.freepik.com/free-photo/wooden-parquet-floor_1219-22.jpg', manufacturer: 'Elisium LLC', category: CATEGORIES[0], price: 9.99 },
	{ id: 2, name: 'GoldenGate', description: 'Oak thing makes your life better', imageUrl: 'https://previews.123rf.com/images/natalia0103/natalia01031506/natalia0103150600020/40967250-seamless-parquet-pattern-background-.jpg', manufacturer: 'Elisium LLC', category: CATEGORIES[1], price: 9.99 },
	{ id: 3, name: 'WineCountry', description: 'Forget about usual floors', imageUrl: 'https://st2.depositphotos.com/4924139/10090/i/950/depositphotos_100908642-stock-photo-seamless-maroon-parquet-pattern-background.jpg', manufacturer: 'Elisium LLC', category: CATEGORIES[2], price: 9.99 }
]