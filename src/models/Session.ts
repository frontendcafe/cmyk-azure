export default class Session {
  private _createdAt: Date;

  private _token: string | null;

  constructor({ createdAt, token, _createdAt, _token }: { createdAt?: Date, token?: string, _createdAt?: Date, _token?: string }) {
    this._createdAt = _createdAt ?? createdAt ?? new Date();
    this._token = _token ?? token ?? null;
  }

  get token() {
    return this._token;
  }

  get createdAt() {
    return typeof this._createdAt === 'string' ? new Date(this._createdAt) : this._createdAt;
  }

  get isValid() {
    const compareDate = new Date();
    compareDate.setHours(compareDate.getHours() + 1);

    return this.createdAt < compareDate;
  }
}
