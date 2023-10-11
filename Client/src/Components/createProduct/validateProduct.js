// con esta funcio valido el formulario de creacion y edicion de un producto
export function validateProduct(input) {
    let error = {};
  
    if (!input.name) {
      error.name = "Debe ingresar un nombre a su producto";
    }
    if (!input.description) {
      error.resumeDescr = "El producto debe tener una descripción";
    }
    if (!input.category) {
      error.category = "Seleccione una categoría";
    }
    if (!input.price) {
      error.price = "Colóquele un precio al producto";
    }
    if (input.image === '') {
      error.image = "El producto debe tener una imagen";
    }
    return error;
  }