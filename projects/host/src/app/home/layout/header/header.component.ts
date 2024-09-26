import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public user = computed(() => this.authService.currentUser());

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  images = [
    {
      itemImageSrc: '/hospital1.jpg',
      thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: '/hospital2.jpg',

      thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 2',
    },
    {
      itemImageSrc: '/hospital3.jpg',

      thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 2',
    },
  ];

  ngOnInit() {
    this.authService.checkAuthStatus().subscribe();
  }
}
