
// Esta función calculará el total de la compra
// 1 bucle para recorrer todos los items que hay en el carrito
// en cada vuelta accedo al produco y a la cantidad
// multiplico para obtener el precio total de cada item 
// sumo en cada vueltta el resultado acumulado


export const  finalAmount = (cartItems) => {
    let totalAmount = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const product = cartItems[i].product;
      const quantity = cartItems[i].quantity;
      const productTotal = product.price  * quantity;
      totalAmount += productTotal;
    }
    
    return totalAmount;
  };
  