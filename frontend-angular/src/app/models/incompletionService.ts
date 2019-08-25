import { Incompletion } from './incompletion';
import { Observable } from 'rxjs';

export interface IncompletionService {
    get(_id: string): Observable<Incompletion>;
    remove(_id: string): Observable<any>;
}
