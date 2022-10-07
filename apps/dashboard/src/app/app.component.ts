import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'marilias-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Marilias Page';
  loaded = false;
  display;

  links = [
    { path: '', icon: 'home', title: 'Home' },
    { path: 'login', icon: 'person', title: 'Login' },
    { path: 'items', icon: 'filter_list', title: 'Items' },
    { path: 'dense', icon: 'menu', title: 'CSS Dense' },
    { path: 'f16s', icon: 'menu', title: 'Viper Collage' },
    { path: 'stylizer', icon: 'menu', title: 'Stylizer' },
    { path: 'tictactoe', icon: 'menu', title: 'Tic-Tac-Toe' },
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
}}
