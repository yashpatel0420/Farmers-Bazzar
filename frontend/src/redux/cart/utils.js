export const CalculateTotal = (cartItems = []) =>
  cartItems.reduce(
    (subtotal, item) => subtotal + item.quantity * item.price,
    0
  );
