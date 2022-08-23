import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Session } from './session.model';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Session[]>('https://api.com').pipe(tap(entities => {
      this.sessionStore.set(entities);
    }));
  }

  add(session: Session) {
    this.sessionStore.add(session);
  }

  update(id:ID, session: Partial<Session>) {
    this.sessionStore.update(id, session);
  }

  remove(id: ID) {
    this.sessionStore.remove(id);
  }

}
