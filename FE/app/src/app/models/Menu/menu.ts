import { Section } from '../Section/section';

export class Menu {
  id: number;
  name: string;
  description: string;
  sections: Section[];
  type:string

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.sections = [];
    this.type = '';
  }
}
