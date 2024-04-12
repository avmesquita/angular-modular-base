import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderMenuService } from '../../services/header-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private router: Router,
                public menuService: HeaderMenuService) {
    }
    
}
