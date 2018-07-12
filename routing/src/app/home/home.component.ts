import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  public onLoadServer(id: number): void {
    // complex calculation...
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  /**
   * onLogin
   */
  public onLogin(): void {
    this.authService.login();
  }

  /**
   * onLogout
   */
  public onLogout(): void {
    this.authService.logout();
  }
}
