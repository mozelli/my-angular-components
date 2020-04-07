export interface Product {
	_id: string;
	name: string;
	category: string;
	amount: number;
	client_price: number;
	provider_price: number;
	createdAt: string;
}