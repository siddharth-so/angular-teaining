import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName: any;
  constructor() {
  }

  ngOnInit() {
    
  }

  nameEventHander($event: any) {
    this.userName = $event;
  }
}
