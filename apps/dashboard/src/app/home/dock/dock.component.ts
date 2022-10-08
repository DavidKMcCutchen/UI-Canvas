import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'marilias-page-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {

  dockItems: MenuItem[];

  ngOnInit() {
      this.dockItems = [
          {
              label: 'Finder',
              icon: "assets/images/dock/finder.svg"
          },
          {
              label: 'App Store',
              icon: "assets/images/dock/appstore.svg"
          },
          {
              label: 'Photos',
              icon: "assets/images/dock/photos.svg"
          },
          {
              label: 'Trash',
              icon: "assets/images/dock/trash.png"
          },
          
      ];

  }
}
