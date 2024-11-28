import { Request, Response } from "express";
import { Product } from "../models/product.model";


const getAllProducts = async(req: Request, res: Response)=>{
  try {
    const products = await Product.find()
  res.status(200).json(products)
} catch (error) {
  res.status(404).json({error: "producs not found"})
}
}

const getProductById = async (req: Request, res: Response)=>{
  try{
    const product = await Product.findById(req.params.id)
    res.status(200).json({message:"seccessed",product})
  }catch (error) {
    res.status(404).json({error: "producs not found"})
  }
}

const createProduct = async (req: Request, res: Response)=>{
  try{
    const product = await Product.create(req.body)
    res.status(200).json({message:"seccessed",product})
  }catch (error) {
    res.status(404).json({error: "producs not found"})
  }
}

const updateProduct = async (req: Request, res: Response)=>{
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
      new: true
    })
    res.status(200).json({message:"seccessed",product})
  }catch (error) {
    res.status(404).json({error: "producs not found"})
  }
}

const deleteProduct = async (req: Request, res: Response)=>{
  try{
    const product = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({message:"deleted"})
  }catch (error) {
    res.status(404).json({error: "producs not found"})
  }
}

export default{
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}