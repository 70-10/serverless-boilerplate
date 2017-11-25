export default class HttpResponse {
  private statusCode: number;
  private headers: any;
  private body: any;

  constructor(statusCode: number, body?: any) {
    this.statusCode = statusCode;
    this.headers = {};
    this.body = body;
  }

  toObject(): Object {
    return {
      statusCode: this.statusCode,
      headers: this.headers,
      body: JSON.stringify(this.body)
    }
  }
}
