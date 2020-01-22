import axios from 'axios';

const url = 'http://localhost:3001/api/products';

class ProductService{
    //Get Product

    static getProducts(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                // eslint-disable-next-line no-console
                console.log(data);
                resolve(
                    data.map(product => ({
                        ...product
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    // Create Product
    static insertProduct(title){
        return axios.post(url, {title});
    }

    // Delete Product
    static deleteProduct(id){
        return axios.delete(url+id);
    }

}

export default ProductService;