const Product =  require("../Models/Product");

const createProduct = async (req,res) =>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({message:"Product Created Successfully!"})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const getProductsById = async (req,res) =>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message:err.message})
    }
}

module.exports = {createProduct , getProductsById}    