"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface CartItem {
  id: string; // unique item id (composite with customizations)
  product: Product;
  quantity: number;
  selectedColor?: string;
  customText?: string; // For acrylic keychain
  customCharmStyle?: string; // For plush charm
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (
    product: Product,
    options?: {
      quantity?: number;
      selectedColor?: string;
      customText?: string;
      customCharmStyle?: string;
    }
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  totalImpact: {
    fabricKg: number;
    artisanHours: number;
    co2Kg: number;
  };
  isCheckoutModalOpen: boolean;
  openCheckoutModal: () => void;
  closeCheckoutModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Initialize with local storage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sns_cart_v1");
      if (saved) {
        setItems(JSON.parse(saved));
      } else {
        // Pre-fill with 1 stylish starter bag so first-time visitors can explore the cart experience right away
        const defaultProduct = PRODUCTS[0];
        setItems([
          {
            id: `${defaultProduct.id}-default`,
            product: defaultProduct,
            quantity: 1,
            selectedColor: defaultProduct.colorways[0]?.name,
          },
        ]);
      }
    } catch {
      // Ignore SSR / localStorage issues
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem("sns_cart_v1", JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const openCheckoutModal = () => {
    setIsOpen(false);
    setIsCheckoutModalOpen(true);
  };
  const closeCheckoutModal = () => setIsCheckoutModalOpen(false);

  const addToCart = (
    product: Product,
    options?: {
      quantity?: number;
      selectedColor?: string;
      customText?: string;
      customCharmStyle?: string;
    }
  ) => {
    const qty = options?.quantity || 1;
    const color = options?.selectedColor || product.colorways[0]?.name;
    const customText = options?.customText || "";
    const customCharmStyle = options?.customCharmStyle || "";

    const compositeId = `${product.id}-${color}-${customText}-${customCharmStyle}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === compositeId);
      if (existing) {
        return prev.map((item) =>
          item.id === compositeId
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          id: compositeId,
          product,
          quantity: qty,
          selectedColor: color,
          customText,
          customCharmStyle,
        },
      ];
    });

    setIsOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const totalImpact = items.reduce(
    (acc, item) => {
      const p = item.product;
      const count = item.quantity;
      return {
        fabricKg: +(acc.fabricKg + p.impactMetrics.fabricUpcycledKg * count).toFixed(2),
        artisanHours: +(acc.artisanHours + p.impactMetrics.artisanHours * count).toFixed(1),
        co2Kg: +(acc.co2Kg + p.impactMetrics.co2SavedKg * count).toFixed(2),
      };
    },
    { fabricKg: 0, artisanHours: 0, co2Kg: 0 }
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        totalImpact,
        isCheckoutModalOpen,
        openCheckoutModal,
        closeCheckoutModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
