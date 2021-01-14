import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order1',
  templateUrl: './order1.component.html',
  styleUrls: ['./order1.component.css'],
})
export class Order1Component implements OnInit {
  public someid;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.someid = id;
  }
}
