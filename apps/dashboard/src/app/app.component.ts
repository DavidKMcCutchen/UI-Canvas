import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'marilias-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  loaded = false;
  display;


  links = [
    { path: '', icon: 'home', title: 'Home' },
    { path: 'charts', icon: 'person', title: 'Charts' },
    { path: 'maps', icon: 'map', title: 'Map' },
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
}}
