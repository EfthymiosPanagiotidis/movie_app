export class BaseRequest {}

export class BaseResponse<T> {
  public value: T | null = null;
  public errorMessage: string | null = null;
}

export interface IBaseService<T> {
  handle(request?: BaseRequest): Promise<BaseResponse<T>>;
}
