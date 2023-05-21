import { Request, Response, NextFunction } from "express";
import {
  getAllProductsFromDatabase,
  getProductByIdFromDatabase,
} from "./product.service";
import { sendApiResponse } from "../../utils/responseHandler";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductsFromDatabase();
  sendApiResponse(res, 200, true, products);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFromDatabase(id);
  sendApiResponse(res, 200, true, product);
};
