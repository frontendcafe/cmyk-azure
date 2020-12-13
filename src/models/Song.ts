import Model from './Model';

interface Props {
  id?: string;
  name?: string;
  external_urls?: any;
  album?: any;
  artists?: any;
  url?: string;
  popularity?: number;
}

export default class Song extends Model {
  private _popularity: number | null;

  private _artists: Model[] | null;

  private _album: Model | null;

  constructor({
    id,
    url,
    external_urls,
    popularity,
    name,
    album,
    artists,
  }: Props) {
    super({ id, name, url, external_urls });
    this._popularity = popularity ?? null;
    this._album = album ? new Model(album) : null;
    this._artists = artists
      ? artists.map((artist: any) => new Model(artist))
      : null;
  }
}
