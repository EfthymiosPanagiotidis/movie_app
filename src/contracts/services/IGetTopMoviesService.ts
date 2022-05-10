import { MovieLite } from "../../models/MovieLite";
import { BaseRequest, BaseResponse, IBaseService } from "./IService";

export class GetTopMoviesRequest extends BaseRequest {
  public apiKey: string = "";
  public options: any = {};

  public constructor(options?: any) {
    super();
    options = options || {};
    this.apiKey = options.apiKey || "";
    this.options = options.options || {};
  }
}

export class GetTopMoviesResponse extends BaseResponse<MovieLite[]> {
  public constructor(options?: any) {
    super();
    options = options || {};
    const value: any = options.value || options.movies || null;
    if (value) {
      this.value = value.map((x: any) => new MovieLite(x));
    }
  }
}

export interface IGetTopMoviesService extends IBaseService<MovieLite[]> {}
