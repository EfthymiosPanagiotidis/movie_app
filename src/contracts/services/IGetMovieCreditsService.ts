import { MovieCredits } from "../../models/MovieCredits";
import { BaseRequest, BaseResponse, IBaseService } from "./IService";

export class GetMovieCreditsRequest extends BaseRequest {
  public apiKey: string = "";
  public movieId: string = "";

  public constructor(options?: any) {
    super();
    options = options || {};
    this.apiKey = options.apiKey || "";
    this.movieId = options.movieId || options.movie_id || options.id || "";
  }
}

export class GetMovieCreditsResponse extends BaseResponse<MovieCredits> {
  public constructor(options?: any) {
    super();
    options = options || {};
    const value: any = options.value || options.credits || null;
    this.value = new MovieCredits(value);
  }
}

export interface IGetMovieCreditsService extends IBaseService<MovieCredits> {}
