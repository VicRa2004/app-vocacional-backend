import { Request, Response } from "express";
import { CrudController } from "../interfaces/crud-controller";
import { ParamsSchemaType, QuerySchemaType } from "../schemas/defaults.schema";
import { UserCreate, UserUpdate } from "../types";
import { ParsedQs } from "qs";

export class AuthController implements CrudController<UserCreate, UserUpdate> {
  async getAll(
    req: Request<unknown, unknown, unknown, QuerySchemaType>,
    res: Response
  ): Promise<void> {}

  async getById(eq: Request<ParamsSchemaType>, res: Response): Promise<void> {}

  async create(
    eq: Request<unknown, unknown, UserCreate, ParsedQs, Record<string, any>>,
    res: Response
  ): Promise<void> {}

  async update(
    eq: Request<ParamsSchemaType, unknown, UserUpdate>,
    res: Response
  ): Promise<void> {}

  async delete(eq: Request<ParamsSchemaType>, res: Response): Promise<void> {}
}
