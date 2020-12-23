export class ShoppingItem {
  id: string;
  name: string;
  qte: number;

  constructor(name: string, qte: number) {
    this.id = this.makeid(10);
    this.name = name;
    this.qte = qte;
  }

   makeid(length): string{
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
