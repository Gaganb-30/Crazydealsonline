import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "./cartSlice";

interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (
      state,
      action: PayloadAction<{
        items: CartItem[];
        total: number;
        shippingAddress: string;
        paymentMethod: string;
      }>
    ) => {
      const newOrder: Order = {
        id: `ORD-${Date.now()}`,
        items: action.payload.items,
        total: action.payload.total,
        shippingAddress: action.payload.shippingAddress,
        paymentMethod: action.payload.paymentMethod,
        createdAt: new Date().toISOString(),
      };
      state.currentOrder = newOrder;
      state.orders.push(newOrder);
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
});

export const { placeOrder, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
