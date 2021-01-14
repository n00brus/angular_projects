import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order2',
  templateUrl: './order2.component.html',
  styleUrls: ['./order2.component.css'],
})
export class Order2Component implements OnInit {
  public someid;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.someid = id;
  }
}
