export class ShoppingItem {
  id: number;
  name: string;
  qte: number;
  createdAt: Date ;

  constructor(name: string, qte: number) {
    this.name = name;
    this.qte = qte;
    this.createdAt = new Date();
  }


}
