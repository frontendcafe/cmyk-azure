import { getPlaylistSongs } from '../services/spotify/playlist';
import Model from './Model';
import Recomendation from './Recomendation';
import Song from './Song';
import User from './User';

interface Props {
  id?: string;
  name?: string;
  description?: string;
  external_urls?: any;
  images?: any;
  imageUrl?: string;
  url?: string;
  songs?: Song[] | [];
  user?: any;
  _user?: any;
  owner?: any;
  recommendations?: Recomendation[] | [];
  songsCount?: number;
  tracks?: any;
}

export default class Playlist extends Model {
  private _description: string | null;

  private _songs: Song[] | null;

  private _songsCount: number | null;

  private _user: User | null;

  private _owner: User | null;

  private _recommendations: Recomendation[] | null;

  constructor({
    id,
    name,
    description,
    url,
    songs,
    user,
    _user,
    recommendations,
    external_urls,
    imageUrl,
    images,
    tracks,
    songsCount,
    owner,
  }: Props) {
    super({ id, name, images, imageUrl, url, external_urls });
    this._description = description ?? null;
    this._songs = songs ?? null;
    this._songsCount = songsCount ?? (tracks?.total ? tracks.total : null);
    this._owner = owner ? new User(owner) : null;
    this._recommendations = recommendations ?? null;

    const jsonUser = user ?? _user;
    this._user = jsonUser ? new User(jsonUser) : null;
  }

  async fillOwner() {
    if (this._owner) await this._owner.fill();
  }

  async fillUser() {
    if (this._user) await this._user.fill();
  }

  async fillSongs() {
    if (this.id) {
      this._songs = await getPlaylistSongs(this.id);
    }
  }

  set user(value) {
    this._user = value;
  }

  get user() {
    return this._user;
  }
  get owner() {
    return this._owner;
  }
  get songs() {
    return this._songs;
  }
}
