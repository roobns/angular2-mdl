import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/delay';
export declare class LoginService {
    login(username: any, password: any): Observable<string>;
}
