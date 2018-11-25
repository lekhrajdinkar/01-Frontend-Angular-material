import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth:boolean = false;
  authSubscription ;
  constructor(private authSrv: AuthService) { }

  ngOnInit() { 
    this.authSubscription = this.authSrv.authChange.subscribe((authStatus) => { this.isAuth = authStatus;} );
   }

  onClose() {
    this.closeSidenav.emit();
  }
  
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
