import { MovieCredits } from "./MovieCredits";
import { MovieLite } from "./MovieLite";

class MovieDetails extends MovieLite {
  public constructor(options: any) {
    super(options);
    options = options || {};
    this.originalTitle =
      options.originalTitle ||
      options.fullTitle ||
      options.original_title ||
      "";
    this.overview =
      options.overview || options.plot || options.description || "";
    this.genres = options.genres || "";
    this.runtime = options.runtime || 0;
    this.rating = options.rating || options.vote_average || 0;
    this.voteCount = options.voteCount || options.vote_count || 0;
    this.releaseDate = options.releaseDate || options.release_date || null;
    this.movieCredits =
      options.movieCredits || options.credits || options.movie_credits || null;
  }

  public get originalTitle(): string {
    return this._originalTitle;
  }

  public set originalTitle(originalTitle: string) {
    this._originalTitle = originalTitle;
  }

  public get overview(): string {
    return this._overview;
  }

  public set overview(overview: string) {
    this._overview = overview;
  }

  public get genres(): string[] {
    return this._genres;
  }

  public set genres(genres: string[]) {
    this._genres = genres;
  }

  public get runtime(): number {
    return this._runtime;
  }

  public set runtime(runtime: number) {
    this._runtime = runtime;
  }

  public get rating(): number {
    return this._rating;
  }

  public set rating(rating: number) {
    this._rating = rating;
  }

  public get voteCount(): number {
    return this._voteCount;
  }

  public set voteCount(voteCount: number) {
    this._voteCount = voteCount;
  }

  public get releaseDate(): Date | null {
    return this._releaseDate;
  }

  public set releaseDate(releaseDate: Date | null) {
    this._releaseDate = releaseDate;
  }

  public get movieCredits(): MovieCredits | null {
    return this._movieCredits;
  }

  public set movieCredits(movieCredits: MovieCredits | null) {
    this._movieCredits = movieCredits;
  }

  private _originalTitle: string = "";
  private _overview: string = "";
  private _genres: string[] = [];
  private _runtime: number = 0;
  private _rating: number = 0;
  private _voteCount: number = 0;
  private _releaseDate: Date | null = null;
  private _movieCredits: MovieCredits | null = null;
}

export { MovieDetails };
