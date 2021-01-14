import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.css'],
})
export class Customer2Component implements OnInit {
  public someid;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.someid = id;
  }
}
