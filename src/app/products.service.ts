import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IProduct
  {
  _id:"",
  name:'',
  price:0,
  image:''
  
}

@Injectable({
  providedIn: 'root'
})

export class GetProductService {

 
  url="http://localhost:7000/";
  Product:IProduct={
    _id:"",
    name:'',
    price:0,
    image:''
    
  };
  AllProducts:IProduct[]=[];


  constructor(private http:HttpClient) { }

getProducts():Observable<any>
{
return this.http.get(this.url+'api/products');
}

SaveProduct(Product:IProduct):Observable<any>
{
  if(Product._id.length>0)
    {
      return this.http.put(this.url+'api/products/'+Product._id,Product);
    }
    else{
      return this.http.post(this.url+'api/products',{name:Product.name,price:Product.price,image:Product.image});
    }
}


DeleteProduct(Id:any):Observable<any>
{
return this.http.delete(this.url+'api/products/'+Id);
}
}