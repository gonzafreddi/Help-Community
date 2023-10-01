
// con esta funcio valido el formulario de creacion de la campaña 
export function validateCampaign(input) {
    let error = {};
  
    if (!input.name) {
      error.name = "Debe ingresar un nombre a su campaña";
    }
    if (!input.short_description) {
      error.resumeDescr = "Debe tener un resumen de su descripción";
    }
    if (input.long_description.length < 450) {
      error.description = "Su descripción debe tener al menos 450 caracteres";
    }
    if (!input.endDate.day || !input.endDate.month || !input.endDate.year) {
      error.endDate = ["Debe completar su fecha de finalización"];
    }
    if (!input.CategoryId) {
      error.CategoryId = "Seleccione una categoría";
    }
    if (!input.state) {
      error.state = "Seleccione una provincia";
    }
    if (!input.finalAmount) {
      error.finalAmount = "Debe tener un objetivo máximo de dinero";
    }
    return error;
  }
  