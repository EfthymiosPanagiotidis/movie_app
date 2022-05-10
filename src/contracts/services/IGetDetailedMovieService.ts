import { MovieDetails } from "../../models/MovieDetails";
import { BaseRequest, BaseResponse, IBaseService } from "./IService";

export class GetDetailedMovieRequest extends BaseRequest {
  public apiKey: string = "";
  public movieId: string = "";

  public constructor(options?: any) {
    super();
    options = options || {};
    this.apiKey = options.apiKey || "";
    this.movieId = options.movieId || options.movie_id || options.id || "";
  }
}

export class GetDetailedMovieResponse extends BaseResponse<MovieDetails> {
  public constructor(options?: any) {
    super();
    options = options || {};
    const value: any = options.value || options.movie || null;
    this.value = new MovieDetails(value);
  }
}

export interface IGetDetailedMovieService extends IBaseService<MovieDetails> {}
