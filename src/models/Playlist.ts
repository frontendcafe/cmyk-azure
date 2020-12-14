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
    this._user = user ? new User(user) : null;
  }

  async fillOwner() {
    if (this._owner) this._owner.fill();
  }

  async fillSongs() {
    if (this.id) {
      this._songs = await getPlaylistSongs(this.id);
    }
  }

  get user() {
    return this._user;
  }
}
