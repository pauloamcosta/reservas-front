import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  ResponseContentType
} from "@angular/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class JsonService {
  myHeaders = new Headers();
  options: RequestOptions;

  constructor(private _http: Http, private router: Router) {
    this.myHeaders.set("Content-Type", "application/json");
    this.myHeaders.set("Accept", "application/json");
  }

  getContent(_url: string): Observable<any> {
    return this._http.get(_url, this.options).pipe(
      map(this.extractData),
      catchError(error => this.handleError(error))
    );
  }

  postContent(_url: string, content: any): Observable<any> {
    return this._http
      .post(_url, content, this.options)
      .pipe(catchError(error => this.handleError(error)));
  }

  updateContent(_url: string, content: any): Observable<any> {
    return this._http
      .put(_url, content, this.options)
      .pipe(catchError(error => this.handleError(error)));
  }

  deleteContent(_url: string): Observable<any> {
    return this._http
      .delete(_url, this.options)
      .pipe(catchError(error => this.handleError(error)));
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
  
  private handleError(error: Response | any) {
    try {
      if (error.url.indexOf("login") < 0) {
        if (error["status"] === 409) {
          alert(
            "Dados conflitantes. Verifique se os campos estão preenchidos corretamente."
          );
        } else {
          alert("Um erro ocorreu.");
        }
      }
    } catch {
      /* VAZIO */
    }
    return throwError(error.message || error);
  }
}
