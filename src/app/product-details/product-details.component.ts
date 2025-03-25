import { Component, OnInit } from '@angular/core';
import { GetProductService, IProduct } from '../products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule,FormsModule],
  providers:[GetProductService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(public service:GetProductService)
{

}
 
  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.service.AllProducts=data;
       console.log(data);
      })
  }

  ProductEdit(id:any)
    {
      this.service.Product=(this.service.AllProducts.find(x => x._id == id)) as IProduct;
     console.log(this.service.Product);
    }

    ProductDelete(id:any)
    {
      
      this.service.DeleteProduct(id).subscribe(data=>{
        
        alert('Record Deleted Successfully');
        this.service.getProducts().subscribe(data=>{
          this.service.AllProducts=data;
           
          })
          
        })
        
    }

    ProductAdd(Product:IProduct)
    {
      
    this.service.SaveProduct(Product).subscribe(data=>{
    
    this.service.getProducts().subscribe(data=>{
      this.service.AllProducts=data;
       
      })
   
   this.service.Product._id='';
   this.service.Product.name='';
   this.service.Product.price=0;
   this.service.Product.image='';
    })
  
  }

}
