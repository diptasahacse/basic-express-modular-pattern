import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const getAllProductsFromDatabase = async (): Promise<IProduct[]> => {
  return Product.find();
};

export const getProductByIdFromDatabase = async (id: string): Promise<IProduct[]> => {
  return Product.find({ _id: id });
};
