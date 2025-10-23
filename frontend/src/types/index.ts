export interface Book {
  id: number;
  title: string;
  publisher: string;
  language: string;
  price: number;
  available: boolean;
  format: string;
  about?: string;
  details?: {
    isbn: string;
    pages: number;
    country: string;
  };
}

export interface CartItem {
  id: number;
  quantity: number;
  book: Book;
}

export interface Cart {
  id: number;
  items: CartItem[];
  total: string;
  itemCount: number;
}

export interface Order {
  id: string;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  shippingAddress: string;
  createdAt: string;
  items: Array<{
    quantity: number;
    price: number;
    book: {
      title: string;
      format: string;
    };
  }>;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
}

export interface Message {
  type: 'success' | 'error';
  text: string;
}

export type PageType = 'home' | 'books' | 'cart' | 'orders' | 'login' | 'signup' | 'book-detail';