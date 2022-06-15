import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.css']
})
export class PageWelcomeComponent implements OnInit {

  userName = '';
  userLogo = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.isLoading = true;
  
    this.http.get('https://randomuser.me/api/').pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((data: any) => {
      this.userName = data?.results?.[0]?.name?.first ?? '';
      this.userLogo = data?.results?.[0]?.picture?.large ?? '';
    })
  }

}
