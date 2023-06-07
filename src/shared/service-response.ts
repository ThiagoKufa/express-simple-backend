export class ServiceResponse<T> {
  public data: T | null;
  public code: number;
  public error: { error: string } | null;

  constructor(data: T | null, code: number, error: string | null) {
    this.data = data;
    this.code = code;
    this.error = error ? { error } : null;
  }
}
