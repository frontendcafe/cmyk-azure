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

  get artist() {
    return this._artists && this._artists.length > 0
      ? this._artists.map((artist) => artist.name).join(', ')
      : '';
  }

  get popularity() {
    return this._popularity ?? 0;
  }

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

    if (album) {
      this._album = new Model(album);
      this.imageUrl = this._album.imageUrl;
    } else this._album = null;

    this._artists = artists
      ? artists.map((artist: any) => new Model(artist))
      : null;
  }
}
