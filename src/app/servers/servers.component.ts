import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  userName = '';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  displayDetails = false;
  displayDetailsArray = [];

  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2000)
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Its name is ' + this.serverName;
  }

  // onCreateUser() {
  //   this.userName = '';
  // }
  
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  sequeceNumberToArrayAndIncrement() {
    // this.displayDetailsArray.push(this.displayDetailsArray.length + 1);
    this.displayDetailsArray.push(new Date());
    // console.log(this.displayDetailsArray[this.displayDetailsArray.length - 1]);
  }

}
