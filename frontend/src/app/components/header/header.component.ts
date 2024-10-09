import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username?: String;
  
  constructor(
    private storageService: StorageService,
    public router: Router,
    public toasterService: ToasterService,
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    console.log("user", user);
    if (user) {
      this.username = user.username;
    }
  }

  signOut() {
    this.storageService.clean();
    window.location.reload();
  }

  call(){
    this.router.navigate(['/call-detail']);
  }

}
