import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from 'aws-amplify';

const apiName = 'api16714d0c';
const path = '/contacts';

@Injectable()
export class ContactService {
  contactList: Contact[] = [];
  isLoading: boolean = true;

  constructor(private http: HttpClient) {
  }

  findById(recordId: string) {
    return API
      .get(apiName, path +'/'+ recordId, {})
  }

  load(): void {
    API
      .get(apiName, path, {})
      .then(response => {
        this.contactList = response;
        // this.isLoading = false;
      })
      .catch(error => {
        console.log(error.response);
        // this.isLoading = false;
    });
  }

  save(entity: Contact) {
    return API
      .post(apiName, path, {
        headers: {
          "Content-Type": "application/json"
        },
        body: entity
      })
  }
}

