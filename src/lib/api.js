const BASE_URL = "https://blog-12g-default-rtdb.firebaseio.com/kode-market/products"

export default{
    async createProduct( productData ){
        let result = await fetch(`${BASE_URL}/.json`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( productData )
        })
        return await result.json()
    },
    async getAllProducts(){
        let result = await fetch(`${BASE_URL}/.json`)
        return await result.json()
    },
    async getProductById( productId ){
        let result = await fetch(`${BASE_URL}/${productId}/.json`)
        return await result.json()
    },
    async patchProduct( productData, productId ){
        let result = await fetch(`${BASE_URL}/${productId}/.json`,{
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( productData )
        })
        return await result.json()
    },
}
