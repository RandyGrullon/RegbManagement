import { Component } from '@angular/core';
import { Menu } from '../models/Menu/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menuArray: Menu[] = [
    {
      id: 1,
      name: 'Test Menu',
      description: 'Test Description',
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      meal: 'breakfast',
    },
    {
      id: 2,
      name: 'Test Menu 2',
      description: 'Test Description 2',
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      meal: 'lunch',
    },
    {
      id: 3,
      name: 'Test Menu 3',
      description: 'Test Description 3',
      createdDateTime: new Date(),
      updatedDateTime: new Date(),
      meal: 'Dinner',
    },
  ];

  selectedMenu: Menu = new Menu();

  AddOrEditMenu() {
    if (this.selectedMenu.id === 0) {
      this.selectedMenu.id = this.menuArray.length + 1;
      this.menuArray.push(this.selectedMenu);
    }

    this.selectedMenu = new Menu();
  }
}
