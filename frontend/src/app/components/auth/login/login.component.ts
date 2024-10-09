import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "src/environments/environment";
import { StorageService } from "src/app/services/storage.service";
import SweetAlert from "src/app/utils/sweetAlert";
import { Router } from '@angular/router';  

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  submitted = false;
  env = environment;
  
  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    this.form = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const { username, password } = this.form.value;

    // Check if the login is for admin using environment credentials
    if (username === this.env.adminUserName && password === this.env.adminPassword) {
      // Admin successfully logged in
      // SweetAlert.successAlert("Success!", "Admin login successful!");

      // Store username and password in session storage
      this.storageService.saveUser({ username, password, role: 'admin' });
      this.isLoggedIn = true;

      // Redirect to dashboard after successful login
      this.router.navigate(['/dashboard']); 
    }
  }
}
