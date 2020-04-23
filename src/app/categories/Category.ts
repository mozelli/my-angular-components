import { Product } from '../products/Product';
export class Category {
	id: number;
	name: string;
	products: Product[];
	createdAt: string;
	updatedAt: string;
}