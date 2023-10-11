// con esta funcio valido el formulario de creacion y edicion de un producto
export function validateProduct(product) {
    let error = {};
  
    

    if (!product.name) {
      error.name = "Debe ingresar un nombre a su producto";
    }
    if (!product.description) {
      error.resumeDescr = "El producto debe tener una descripción";
    }
    if (!product.category) {
      error.category = "Seleccione una categoría";
    }
    if (!product.price) {
      error.price = "Colóquele un precio al producto";
    }
    if (product.image === '') {
      error.image = "El producto debe tener una imagen";
    }
    return error;
  }