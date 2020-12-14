interface Props {
  id?: string;
  user?: string;
  stars?: number;
}

export default class Recomendation {
  private id: string | null;

  private user: string | null;

  private stars: number | null;

  constructor({ id, user, stars }: Props) {
    this.id = id ?? null;
    this.user = user ?? null;
    this.stars = stars ?? null;
  }
}
