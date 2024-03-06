import { Component, Input, computed, signal } from '@angular/core';

export type MenuItem = {
  title: string,
  icon: string,
  routeLink: string
}
@Component({
  selector: 'app-youtube-studio-sidenav',
  templateUrl: './youtube-studio-sidenav.component.html',
  styleUrl: './youtube-studio-sidenav.component.scss'
})
export class YoutubeStudioSidenavComponent {
  sideNavCollapsed = signal(false);
  profilePictureSize: string = '40';

  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
    this.profilePictureSize = value ? '100' : '40';
  }

  menuItems = signal<MenuItem[]>([
    {
      title: 'Dashboard',
      icon: 'dashboard',
      routeLink: 'dashboard'
    },
    {
      title: 'Content',
      icon: 'video_library',
      routeLink: 'content'
    },
    {
      title: 'Analytics',
      icon: 'analytics',
      routeLink: 'analytics'
    },
    {
      title: 'Commenters',
      icon: 'commenters',
      routeLink: 'commenters'
    }
  ]);
}
