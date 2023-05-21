import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const getAllProductsFromDatabase = async (): Promise<IProduct[]> => {
  return await Product.find();
};
