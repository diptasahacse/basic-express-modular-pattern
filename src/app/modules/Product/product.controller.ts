import { Request, Response, NextFunction } from "express";
import {
  getAllProductsFromDatabase,
  getProductByIdFromDatabase,
} from "./product.service";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductsFromDatabase();
  res.send(products);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFromDatabase(id);
  res.send(product);
};
