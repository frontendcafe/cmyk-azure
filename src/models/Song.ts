interface Props {
  id?: string
}

export default class Song {
  private id: string | null;

  constructor({ id }: Props) {
    this.id = id ?? null;
  }
}