import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss']
})
export class HttpRequestsComponent implements OnInit, OnDestroy {

  // firebase'den gelecek olan post'ları karşılar
  loadedPosts: Post[] = [];
  // loadingIndicator
  loadingIndicator: boolean = false;
  // error messages
  errorMessages = null;
  // service&subject ile error messages
  errorMessagesForSubject = null;
  private errorSub: Subscription;

  // After injecting any class(service), we can start using its methods.
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // so whenever this page loads, whenever this app loads, I want to fetch post
    this.onFetchPosts();
    // service&subject ile error messages
    this.errorSub = this.postService.subject.subscribe(error => { this.errorMessagesForSubject = error });
    //this.demoService.printLog('Hello from HttpRequestsComponent ngOnInit!');
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.create(postData.title, postData.content);
  }

  // ayrıca eklediğimiz buton için
  onFetchPosts() {
    this.loadingIndicator = true;

    this.postService.get().subscribe({
      next: (response) => {
        this.loadingIndicator = false;
        this.loadedPosts = response;
      },
      error: (err) => {
        this.loadingIndicator = false;
        console.log(err);
        this.errorMessages = err.message;
      },
    });
  }

  onClearAllPosts() {
    // When I deleted all posts, I also want to clear my loaded posts array here in the component.
    this.postService.delete().subscribe({
      next: () => { this.loadedPosts = [] },
      error: (err) => { console.log(err) }
    });
  }

  onHandleError(){
    this.errorMessages = null;
    this.errorMessagesForSubject = null;
  }

}