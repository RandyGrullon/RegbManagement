import { Items } from '../Items/items';

export class Section {
  //name is menu.name
  id: number;
  name: string;
  description: string;
  items: Items[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.items = [];
  }
}
