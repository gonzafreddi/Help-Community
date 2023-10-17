// productCreateOrEdit
import {validateProduct} from "./validateProduct"
export function handleSubmit(product, imageUrl, dispatch, id, postProduct, putProduct, isEditing) {

    const { name, description, price, category, stock } = product;

    const productToPost = {
        name,
        description,
        image: imageUrl,
        price,
        stock,
        CategoryProductId: category,
        // brand:'Marca',
        rating: 0
    }

    console.log('ESTA EDITANDO ======>>>>>>>>');
    console.log(isEditing);

    if (isEditing) {
        try {

            const productToPut = {
                ...productToPost,
                id: id
            }
            dispatch(putProduct([productToPut]));
            
        } catch (error) {
            return(error.message);
        }
    } else {

        console.log('ESTA INTENTANDO HACER UN POST');
        try {
            
            dispatch(postProduct(productToPost));
            
        } catch (error) {
            return(error.message);
        }
        
    }



}
  
export function handleChange(product, setErrors) {
    
    setErrors(validateProduct(product));

}
  
export function disableFunction(errors) {
    for (let err in errors) {
        if (errors[err] !== "") {
            return true;
        }
    }
    return false;
}