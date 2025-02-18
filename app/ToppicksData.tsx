export interface Product {
    id:number;
    name:string;
    price:string;
    image:string;
}

export const toppicks: Product[] = [
    {
        id: 1, 
        name: 'Trenton modular sofa_3',
        price:'Rs. 25,000.00',
        image: '/image1.jpg'
    },
    {
        id: 2,
        name: 'Granite diningtable with dining chair',
        price:'Rs. 25,000.00',
        image: '/image2.jpg'
    },
    {
        id: 3,
        name: 'Outdoor bar table and stool',
        price: 'Rs. 25,000.00',
        image: '/image3.jpg' 
    },
    {
        id: 4,
        name: 'palin console with teak mirror',
        price: 'Rs. 25,000.00',
        image: '/image4.jpg'
    },
];