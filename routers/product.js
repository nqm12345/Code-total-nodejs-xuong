import { Router } from "express";
import productControllers from "../controllers/products.js";
import validBodyRequest from "../middlewares/validRequestBody.js";
import productSchema from "../validations/product.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import { checkIsAdmin } from "../middlewares/checkIsAdmin.js";

const productRouter = Router();
productRouter.get("/", productControllers.getProducts);
productRouter.get("/:id", productControllers.getProductById);
productRouter.use(checkAuth, checkIsAdmin)
productRouter.put("/hide/:id", productControllers.softproductById);
productRouter.delete("/delete/:id", productControllers.deleteProductById);
productRouter.use(validBodyRequest(productSchema))
productRouter.post("/", productControllers.creatProduct);
productRouter.put("/update/:id", productControllers.putProductById);

export default productRouter;
