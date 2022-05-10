import { MovieLite } from "../../models/MovieLite";
import { BaseRequest, BaseResponse, IBaseService } from "./IService";

export class SearchMoviesRequest extends BaseRequest {
  public apiKey: string = "";
  public options: any = {};

  public constructor(options?: any) {
    super();
    options = options || {};
    this.apiKey = options.apiKey || "";
    this.options = options.options || {};
  }
}

export class SearchMoviesResponse extends BaseResponse<MovieLite[]> {
  public totalPages: number = 0;
  public totalResults: number = 0;

  public constructor(options?: any) {
    super();
    options = options || {};
    const value: any = options.value || options.movies || null;
    if (value) {
      this.value = value.map((x: any) => new MovieLite(x));
      this.totalPages = options.totalPages || options.total_pages || 0;
      this.totalResults = options.totalResults || options.total_results || 0;
    }
  }
}

export interface ISearchMoviesService extends IBaseService<MovieLite[]> {}
