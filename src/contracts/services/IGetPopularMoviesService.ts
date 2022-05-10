import { MovieLite } from "../../models/MovieLite";
import { BaseRequest, BaseResponse, IBaseService } from "./IService";

export class GetPopularMoviesRequest extends BaseRequest {
  public apiKey: string = "";
  public options: any = {};

  public constructor(options?: any) {
    super();
    options = options || {};
    this.apiKey = options.apiKey || "";
    this.options = options.options || {};
  }
}

export class GetPopularMoviesResponse extends BaseResponse<MovieLite[]> {
  public constructor(options?: any) {
    super();
    options = options || {};
    const value: any = options.value || options.movies || null;
    if (value) {
      this.value = value.map((x: any) => new MovieLite(x));
    }
  }
}

export interface IGetPopularMoviesService extends IBaseService<MovieLite[]> {}
