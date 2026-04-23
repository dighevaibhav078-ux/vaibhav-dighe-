export type View = 'home' | 'shop' | 'our-story' | 'sustainability' | 'recipes' | 'contact' | 'cart' | 'account';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  tag?: {
    label: string;
    type: 'organic' | 'cold-pressed';
  };
}
