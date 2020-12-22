import { getUserById } from '../services/spotify/user';
import Model from './Model';

interface Props {
  _id?: string;
  id?: string;
  name?: string;
  email?: string;
  imageUrl?: string;
  url?: string;
  display_name?: string;
  external_urls?: any;
  images?: any;
}

export default class User extends Model {
  private _email: string | null;

  constructor({
    id,
    _id,
    name,
    display_name,
    email,
    imageUrl,
    images,
    external_urls,
    url,
  }: Props) {
    super({ id: id ?? _id, name, display_name, images, imageUrl, url, external_urls });
    this._email = email ?? null;
  }

  get email() {
    return this._email;
  }

  async fill() {
    if (this.id) {
      const user = await getUserById(this.id);

      if (user) {
        this.name = user.name;
        this._email = user.email;
        this.imageUrl = user.imageUrl;
        this.url = user.url;
      }
    }
  }
}
