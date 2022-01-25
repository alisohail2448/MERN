import { products } from "./constants/product.js";
import Product from './models/productSchema.js'

const DefaultData = async() =>{

    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Data is Imported Succesfully');
    }
    catch(error){
        console.log(`Error: `, error.message);
    }
}

export default DefaultData;