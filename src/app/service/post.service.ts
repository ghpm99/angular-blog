import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'http://curso-angular-backend.herokuapp.com/api/v1/blog/';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    const params = new HttpParams({
      fromObject: {
        page: 0,
        limit: 10,
      },
    });
    return this.httpClient.get<Post[]>(this.url, { params });
  }

  postMensagem(post : Post){
    return this.httpClient.post<Post>(this.url,post);
  }
}
