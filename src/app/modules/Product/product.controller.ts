import { Request, Response, NextFunction } from "express";
import { getAllProductsFromDatabase } from "./product.service";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getAllProductsFromDatabase();
  res.send(products);
};
