import { outputAst } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  onCreateAccount(accoutnName: string, accountStatus: string){
    this.accountAdded.emit({
      name: accoutnName,
      status: accountStatus
    });
    console.log('A server status change, new status: ' + accountStatus);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
