export const API_BASE = 'http://localhost:3000';

const getHeaders = (includeAuth: boolean = false) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (includeAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
};

export const api = {
  // Books
  getBooks: async (searchTerm?: string) => {
    const url = searchTerm ? `${API_BASE}/books?search=${searchTerm}` : `${API_BASE}/books`;
    const res = await fetch(url);
    return res.json();
  },

  getBookDetails: async (id: number) => {
    const res = await fetch(`${API_BASE}/books/${id}`);
    return res.json();
  },

  // Auth
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_BASE}/user/login`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ email, password }),
    });
    return { ok: res.ok, data: await res.json() };
  },

  signup: async (userData: any) => {
    const res = await fetch(`${API_BASE}/user/signup`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(userData),
    });
    return { ok: res.ok, data: await res.json() };
  },

  getProfile: async () => {
    const res = await fetch(`${API_BASE}/user/profile`, {
      headers: getHeaders(true),
    });
    return res.json();
  },

  // Cart
  getCart: async () => {
    const res = await fetch(`${API_BASE}/cart`, {
      headers: getHeaders(true),
    });
    return res.json();
  },

  addToCart: async (bookId: number, quantity: number = 1) => {
    const res = await fetch(`${API_BASE}/books/${bookId}/buy`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify({ quantity }),
    });
    return { ok: res.ok, data: await res.json() };
  },

  updateCartItem: async (itemId: number, quantity: number) => {
    const res = await fetch(`${API_BASE}/cart/update/${itemId}`, {
      method: 'PATCH',
      headers: getHeaders(true),
      body: JSON.stringify({ quantity }),
    });
    return res.ok;
  },

  removeFromCart: async (itemId: number) => {
    const res = await fetch(`${API_BASE}/cart/remove/${itemId}`, {
      method: 'DELETE',
      headers: getHeaders(true),
    });
    return res.ok;
  },

  // Orders
  getOrders: async () => {
    const res = await fetch(`${API_BASE}/orders`, {
      headers: getHeaders(true),
    });
    return res.json();
  },

  createPayment: async (shippingAddress: string) => {
    const res = await fetch(`${API_BASE}/orders/create-payment`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify({ shippingAddress }),
    });
    return { ok: res.ok, data: await res.json() };
  },
};