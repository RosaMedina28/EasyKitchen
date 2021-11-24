import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiURL = environment.ApiUrl;
  
  constructor(private http: HttpClient, private cookies: CookieService) {}

  //Iniciar Sesion
  login(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}login`, request)
  }

  //Registro
  registro(request: Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}register`, request)
  }

  //Recetas
  Recetas(request:Object):Observable<any>{
    return this.http.post<any>(`${this.apiURL}recipes`,request)
  }


  //Cookies
  setToken(token) {
    this.cookies.set("token", token);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

  CheckToken() {
    return this.cookies.check("token");
  }

  DeleteToken() {
    this.cookies.delete("token");
  }

}
