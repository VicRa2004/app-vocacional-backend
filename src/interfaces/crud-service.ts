export interface CrudService<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
  create(data: T): Promise<T>;
  update(id: string, data: T): Promise<T>;
  delete(id: string): Promise<void>;
}
