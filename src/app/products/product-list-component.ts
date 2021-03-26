import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService] // or declare in the product.service if it is used throughout the whole app.
})



export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService){}

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  listFilter: string = '';
  errorMessage: string ='';
  showImage:boolean = false;
  products: IProduct[] = [];
  toDelArray: Array<{pID : number}>

  pName: string = ''

  ngOnInit(): void{
    this.productService.getProducts().subscribe({
      next: products => {

        this.products = products;
        this.products.push({
          productId: 5,
          productName: "Hammer",
          productCode: "TBX-0048",
          releaseDate: "May 21, 2021",
          description: "Curved claw steel hammer",
          price: 8.9,
          starRating: 4.8,
          imageUrl: "assets/images/hammer.png"

          });
        this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
    
    
  }

  addRow():void {
    this.products.push({
      productId: 5,
      productName: this.pName,
      productCode: "TBX-0048",
      releaseDate: "May 21, 2021",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png"

      });
      
      this.performFilter(this.listFilter);
      console.log(this.products);

  }

  deleteRow(x):void {
    console.log(this.products[x].productName);
    this.products.splice(x,1);
    //this.toDelArray.push(this.products[x].productId);
    this.performFilter(this.listFilter);
    
    console.log(x);
    console.log(this.products)
  }

  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  filteredProducts: IProduct[]


  private _listFilter: string = '';
  get listFilter1(): string {
    return this._listFilter;
  }
  set listFilter1(value: string){
    this._listFilter = value;
    console.log('In Setter:'+ value);
    //this.filteredProducts = this.performFilter(value);
  }
   
  performFilter(filterBy:String){
    filterBy = filterBy.toLocaleLowerCase();
    this.filteredProducts= this.products.filter( product =>
      product.productName.toLocaleLowerCase().includes(filterBy))
  }

  onRatingClicked(message: string){
    this.pageTitle = 'Product title : ' + message;
  }

  


}