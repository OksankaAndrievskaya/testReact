import { injectable } from "inversify";
import {HttpService  } from "../http.service";

@injectable()
class ApiService {
  /**
   * List all services related to api
   */
  public constructor(public http: HttpService) {}
}

export { ApiService };
