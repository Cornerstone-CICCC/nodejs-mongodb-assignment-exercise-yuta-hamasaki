import {Router} from "express"
import productController from "../controllers/product.controller"

const productRouter = Router()

productRouter.get('/',productController.getAllProducts)
productRouter.post('/',productController.createProduct)
productRouter.get('/:id',productController.getProductById)
productRouter.put('/:id',productController.getProductById)
productRouter.delete('/:id',productController.deleteProduct)

export default productRouter