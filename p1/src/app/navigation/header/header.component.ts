import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false; 

  constructor(private authSrv: AuthService) { }

  ngOnInit() { 
    this.authSrv.authChange.subscribe((authStatus) => { this.isAuth = authStatus;} );
   }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout(){
    this.authSrv.logout();
  }
}
