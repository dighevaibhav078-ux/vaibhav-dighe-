import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Whole Farm Milk',
    price: 5.99,
    description: 'Rich, creamy, and minimally pasteurized to retain essential nutrients and full-bodied flavor.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJeJdMhHbqyaU41K2HiNnex9V4Uf1coNF_vqYq3gH_bjOrXtqCJi8o86n8WwfChY4vGndpVeaDxxYyB6e1WcSogRTz-VcfR0JiKiN84_FSXvWyP_bp8H41ax5iKnAdw-L_XqsrzH4VPZ4xuY-qoeOShCjUKgJ6R9BbY3VVCBWJ1sc6YoI2911ZsAmSEsfrdOtMmI2hdZQ9obF2cZQYGnVRpqc0FQ6BK-e7Qbcp3TXizcU43sNj3pw9xhlrLb4cMBb28wq6XkoIWMVf',
    category: 'All Milk',
    tag: { label: 'Organic', type: 'organic' }
  },
  {
    id: '2',
    name: 'Cultured Butter',
    price: 7.50,
    description: 'Slow-churned from cultured cream for a complex, slightly tangy profile perfect for spreading.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW6EsaNMNE596n23SkhShMRz17SXqVDeLXj8taVESkhwK5tNpbNtItk7sOReEdrZ0h8KXssfp6BbB3iv1t_pF2M7_8HvUHQiFz38WQNMkX3Y9gq2bQJBOgD61EMl0ZPTzlnwMiYizFeM9O0qYhJHTvykvvBuIQgI0dvhEKop2t4KS4kOueesZFVU7JsB-5FfGYja3cEybSRmxb-XOV1roSHAPIlnQwOZa5MXAVLjF4Zyrki8b8KX37B2UjSfFk6umz7I1qsTa7nY_f',
    category: 'Butter & Creams',
    tag: { label: 'Cold Pressed', type: 'cold-pressed' }
  },
  {
    id: '3',
    name: 'Aged Cheddar',
    price: 12.00,
    description: 'Aged for 18 months in our cellars, delivering a sharp, crystalline texture with deep umami notes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxIDmSIK09v2_DVbSJ6Fk81w6kBvX5MCLjh2-XnIHFak7f4HdSbRsniF3qMalZB--vh_rR208KZ0PzWhLjiVR6z4XqqrP1S7g_pS6dWIqLvdydQdNzivyhgiBS0EqMylzSBfBClfUPABNYAvezo9M-TrLIyBc7dXtAEgWys6nER3mBVrn-ttm-Sqxdml3nfc6AwEL8EluekXkHr0zT1ODgjVAKnf-0qEyYXw2UVuORtfNeF-QioP7m-64hSz_L9cfTUUTJnxn_incE',
    category: 'Artisanal Cheese'
  }
];
