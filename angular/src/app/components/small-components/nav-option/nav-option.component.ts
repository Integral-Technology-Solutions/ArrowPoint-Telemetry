import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-option',
  templateUrl: './nav-option.component.html',
  styleUrls: ['./nav-option.component.scss']
})
export class NavOptionComponent implements OnInit {

  // Component Inputs
  @Input() name: string;
  @Input() path: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.name);
  }

  navigate() {
    console.log('navigating to' + this.name);
    this.router.navigateByUrl('dashboard/' + this.path);
    console.log('routing');
    console.log(this.path);

  }

}
