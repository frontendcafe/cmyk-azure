interface Props {
  id?: string;
  name?: string;
  display_name?: string;
  external_urls?: any;
  images?: any;
  imageUrl?: string;
  url?: string;
}

export default class Model {
  private _id: string | null;

  private _name: string | null;

  private _url: string | null;

  private _imageUrl: string | null;

  constructor({
    id,
    name,
    url,
    external_urls,
    imageUrl,
    images,
    display_name,
  }: Props) {
    this._id = id ?? null;
    this._name = name ?? display_name ?? null;
    this._url = url ?? external_urls?.spotify ?? null;
    this._imageUrl =
      imageUrl ??
      (images && images.length > 0 ? images[images.length - 1].url : null);
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get imageUrl() {
    return this._imageUrl;
  }
  get url() {
    return this._url;
  }

  set id(value) {
    this._id = value;
  }
  set name(value) {
    this._name = value;
  }
  set imageUrl(value) {
    this._imageUrl = value;
  }
  set url(value) {
    this._url = value;
  }
}
