// productCreateOrEdit
import {validateProduct} from "./validateProduct"
export function handleSubmit(product, imageUrl, dispatch, postProduct) {

    const { name, description, image, price, category, stock } = product;

    console.log(image);

    const productToPost = {
        name,
        description,
        image: imageUrl,
        price,
        stock,
        CategoryProductId: category,
        brand:'Marca',
        rating: 0
    }

    console.log(`PRODUCT TO POST IMAGE ---> ${productToPost.image}`);
    try {
        dispatch(postProduct(productToPost));
        
    } catch (error) {
        console.log(error.message);
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