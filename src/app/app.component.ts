import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.http.get<any>(environment.backendurl+'/products').subscribe
    ((res)=> {
      console.log(res);
    });
  }
  title = 'StoreClient';
}
