import Recomendation from "./Recomendation";
import Song from "./Song";
import User from "./User";

interface Props {
  id?: string,
  name?: string,
  url?: string,
  songs?: Song[] | [],
  user?: User,
  recommendations?: Recomendation[] | [],

}

export default class Playlist {
  private id: string | null;

  private name: string | null;

  private url: string | null;

  private songs: Song[] | null;

  private user: User | null;

  private recommendations: Recomendation[] | null;

  constructor({ id, name, url, songs, user, recommendations }: Props) {
    this.id = id ?? null;
    this.name = name ?? null;
    this.url = url ?? null;
    this.songs = songs ?? null;
    this.user = user ?? null;
    this.recommendations = recommendations ?? null;
  }
}