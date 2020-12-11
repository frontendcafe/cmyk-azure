interface Props {
  id?: string
}

export default class User {
  private id: string | null;

  constructor({ id }: Props) {
    this.id = id ?? null;
  }
}