import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  onClick() {
    this.route.navigate(['report', 2033]);
    // this.route.navigateByUrl('/contact');
  }
}
