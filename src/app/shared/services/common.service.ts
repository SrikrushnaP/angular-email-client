import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/services/api.service';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public inbox_email = environment.server_url + "/inbox/";

  public delete_email = environment.server_url + "/delete/";

  public spam_email = environment.server_url + "/spam/";

  constructor(private apiService: ApiService, private http: HttpClientModule) { }

  //get all mail of Inbox
  getInboxData() {
    return this.apiService.get(this.inbox_email);
  }
  getOneEmailData(id){
    return this.apiService.get(this.inbox_email+id);
  }

  readUnreadEmailData(id, email_dto){
    return this.apiService.put(this.inbox_email + id, email_dto);
  }

  getUnreadEmailNumber(){
    return this.apiService.get(this.inbox_email+'?unread='+true);
  }


  // readInboxMail(id): Observable<any> {
  //   return this.apiService.put(this.inbox_email + id, email_dto);
  // }
  deleteInboxEmail(id): Observable<any> {
    return this.apiService.delete(this.inbox_email + id);
  }
  addEmailToDelete(email_dto): Observable<any> {
    return this.apiService.post(this.delete_email, email_dto);
  }

  // addMailToDeleteItem(email_dto): Observable<any> {
  //   return this.apiService.post(this.delete_email, email_dto);
  // }

  getDeletedEmail(): Observable<any> {
    return this.apiService.get(this.delete_email);
  }

  getSpamEmail(): Observable<any> {
    return this.apiService.get(this.spam_email);
  }

}
