import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrls: ['./customer1.component.css'],
})
export class Customer1Component implements OnInit {
  public someid;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.someid = id;
  }
}
