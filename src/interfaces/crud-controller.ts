import { Request, Response } from "express";
import { ParamsSchemaType, QuerySchemaType } from "../schemas/defaults.schema";

export interface CrudController<TCreate, TUpdate> {
  getAll(
    req: Request<unknown, unknown, unknown, QuerySchemaType>,
    res: Response
  ): Promise<void>;
  getById(eq: Request<ParamsSchemaType>, res: Response): Promise<void>;
  create(eq: Request<unknown, unknown, TCreate>, res: Response): Promise<void>;
  update(
    eq: Request<ParamsSchemaType, unknown, TUpdate>,
    res: Response
  ): Promise<void>;
  delete(eq: Request<ParamsSchemaType>, res: Response): Promise<void>;
}
