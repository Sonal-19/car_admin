import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = environment.authApiUrl;
const AUTH_API_K = environment.authApiUrlKommuno;
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' ,
    'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEwMDAxNDI0IiwiUk9MRSI6IkNsaWVudCIsInVzZXJfcm9sZV9pZCI6MjU0MCwiaWF0IjoxNzI4Mjk3NjA0LCJleHAiOjE3MjgzMzAwMDR9.FX1wPborfnePPnRjIREJ9yoHehqGU-L_-4o0xTOPTxc',
    'accesskey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEwMDAxNDI0IiwidXNlcl90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeWJtRnRaU0k2SWpFd01EQXhOREkwSWl3aVVrOU1SU0k2SWtOc2FXVnVkQ0lzSW5WelpYSmZjbTlzWlY5cFpDSTZNalUwTUN3aWFXRjBJam94TnpJNE1qazNOakEwTENKbGVIQWlPakUzTWpnek16QXdNRFI5LkZYMXdQYm9yZm5lUFBuUmpJUkVKOXlvSGVocUdVLUxfLTRvMHhUT1BUeGMiLCJpYXQiOjE3MjgyOTgwNDcsImV4cCI6MTc1OTgzNDA0N30.1opBLjfsEfO8rgw2ebhQaIx95_8UDi9U6ZK5_MuWU5o' 
  })
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getQrCode(): Observable<any> {
    return this.http.get(
      AUTH_API + 'vehicle/getQrCode/' ,
      httpOptions
    );
  }

  dashboardReport(reqBody:any): Observable<any> {
    return this.http.post(
      AUTH_API_K + 'dashboardReport/' ,
      reqBody,
      httpOptions
    );
  }

}
