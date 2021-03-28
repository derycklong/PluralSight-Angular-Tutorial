import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { IProduct } from '../products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle:string = 'Product Detail';
  product: IProduct | undefined ;
  sub!: Subscription

  constructor(private route:ActivatedRoute, 
              private router:Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.sub = this.productService.getProduct(id).subscribe({
      next: product => {
        this.product= product;
      }
    });
    // this.product = {
    //   "productId": 5,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2021",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "assets/images/leaf_rake.png"
    // }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBack(): void{
    this.router.navigate(['/products']);

  }

}
