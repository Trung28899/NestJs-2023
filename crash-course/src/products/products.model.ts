export class Product {
  constructor(
    public id: string,
    public title: string,
    public desc: string,
    public price: number,
  ) {}
}

/*
    THE CODE ABOVE IS THE SAME AS: 

export class Product {
  id: string;
  title: string;
  description: string;
  price: number;

  constructor(id: string, title: string, desc: string, price: number) {
    this.id = id;
    this.title = title;
    this.description = this.description;
    this.price = price;
  }
}


*/
