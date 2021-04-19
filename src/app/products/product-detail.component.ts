import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product detail";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const it = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: {id}`;
  }

}
