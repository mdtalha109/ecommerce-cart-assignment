export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }
  
  export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
  }
  