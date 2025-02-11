import { Request, Response } from "express";

export interface CrudController<TCreate, TUpdate> {
  getAll(req: Request, res: Response): Promise<void>;
  getById(eq: Request, res: Response): Promise<void>;
  create(eq: Request<unknown, unknown, TCreate>, res: Response): Promise<void>;
  update(eq: Request<unknown, unknown, TUpdate>, res: Response): Promise<void>;
  delete(eq: Request, res: Response): Promise<void>;
}
