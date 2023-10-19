// productCreateOrEdit
import {validateProduct} from "./validateProduct"
export function handleSubmit(product, imageUrl, dispatch, id, postProduct, putProduct, isEditing) {

    const { name, description, price, category, stock, state } = product;

    const productToPost = {
        name,
        description,
        image: imageUrl,
        price,
        stock,
        CategoryProductId: category,
        state,
        // brand:'Marca',
        rating: 0
    }


    if (isEditing) {
        try {

            // console.log('state:');
            // console.log(switchValue);

            const productToPut = {
                ...productToPost,
                id: id,
            }
            dispatch(putProduct(productToPut));
            
        } catch (error) {
            return(error.message);
        }
    } else {

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