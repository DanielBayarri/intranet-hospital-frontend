import { Component } from '@angular/core';
import { itemsNav } from './items-nav';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [RouterLink, RouterLinkActive
    ],
    templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
    itemsNav = itemsNav
 }
