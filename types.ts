export type BasicProduct = {

    id: string;
  
    name: string;
  
    price: number;
  
    image: string;
  
  };
export interface Product {
    category: string;
    id: string;
    price: number;
    description: string;
    stockLevel: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: number;
    name: string;
    image: any;
    _id: string;
    sizes:string[];
    
  }
  