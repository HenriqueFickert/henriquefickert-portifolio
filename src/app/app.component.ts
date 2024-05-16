import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    MatSidenavModule
  ]
})
export class AppComponent {
  title = 'henriquefickert-portifolio';
}
