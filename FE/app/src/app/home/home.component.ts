import { Component, Inject } from '@angular/core';
import { Menu } from '../models/Menu/menu';
import { Items } from '../models/Items/items';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  itemsArray: Items[] = [];
  menuArray: Menu[] = [
    {
      id: 1,
      name: 'Breakfast Menu',
      description:
        'Start your day off right with our delicious breakfast options.',
      sections: [
        {
          id: 1,
          name: 'Egg Dishes',
          description:
            'All egg dishes come with your choice of toast or English muffin.',
          items: [
            {
              id: 1,
              name: 'Classic Eggs Benedict',
              description:
                'Two poached eggs served on a toasted English muffin with Canadian bacon and hollandaise sauce.',
            },
            {
              id: 2,
              name: 'Vegetarian Omelette',
              description:
                'Three egg omelette filled with sautéed mushrooms, spinach, and Swiss cheese.',
            },
            {
              id: 3,
              name: 'Belgian Waffle',
              description:
                'Crisp golden waffle topped with fresh berries and whipped cream.',
            },
          ],
        },
        {
          id: 2,
          name: 'Bakery',
          description: 'Our bakery items are baked fresh daily.',
          items: [
            {
              id: 4,
              name: 'Croissant',
              description:
                'Freshly baked flaky croissant served with butter and jam.',
            },
            {
              id: 5,
              name: 'Cinnamon Roll',
              description:
                'Warm and gooey cinnamon roll topped with cream cheese frosting.',
            },
            {
              id: 6,
              name: 'Blueberry Muffin',
              description:
                'Moist and fluffy muffin filled with fresh blueberries.',
            },
          ],
        },
      ],
      type: 'breakfast',
    },
    {
      id: 2,
      name: 'Lunch Menu',
      description: 'Enjoy a delicious lunch with our wide variety of options.',
      sections: [
        {
          id: 1,
          name: 'Sandwiches',
          description:
            'All sandwiches come with your choice of side salad, soup, or French fries.',
          items: [
            {
              id: 7,
              name: 'Classic BLT',
              description:
                'Bacon, lettuce, and tomato on toasted bread with mayo.',
            },
            {
              id: 8,
              name: 'Grilled Cheese',
              description: 'Melted cheddar cheese on grilled sourdough bread.',
            },
            {
              id: 9,
              name: 'Turkey Club',
              description:
                'Sliced turkey, bacon, lettuce, tomato, and mayo on toasted bread.',
            },
          ],
        },
        {
          id: 2,
          name: 'Salads',
          description: 'All salads are served with your choice of dressing.',
          items: [
            {
              id: 10,
              name: 'Caesar Salad',
              description:
                'Crisp romaine lettuce, Parmesan cheese, and croutons tossed in Caesar dressing.',
            },
            {
              id: 11,
              name: 'Cobb Salad',
              description:
                'Mixed greens topped with grilled chicken, bacon, avocado, egg, and blue cheese crumbles.',
            },
            {
              id: 12,
              name: 'Greek Salad',
              description:
                'Fresh tomatoes, cucumbers, red onions, and feta cheese tossed in a Greek vinaigrette.',
            },
          ],
        },
      ],
      type: 'lunch',
    },
    {
      id: 3,
      name: 'Dinner Menu',
      description: 'Enjoy a delicious dinner with our wide variety of options.',
      sections: [
        {
          id: 1,
          name: 'Appetizers',
          description:
            'All appetizers come with your choice of side salad, soup, or French fries.',
          items: [
            {
              id: 13,
              name: 'Mozzarella Sticks',
              description:
                'Breaded mozzarella cheese sticks served with marinara sauce.',
            },
            {
              id: 14,
              name: 'Chicken Wings',
              description:
                'Crispy chicken wings tossed in your choice of sauce.',
            },
            {
              id: 15,
              name: 'Nachos',
              description:
                'Tortilla chips topped with melted cheese, jalapeños, and pico de gallo.',
            },
          ],
        },
        {
          id: 2,
          name: 'Entrees',
          description:
            'All entrees come with your choice of side salad, soup, or French fries.',
          items: [
            {
              id: 16,
              name: 'Steak',
              description: 'Grilled steak served with your choice of sauce.',
            },
            {
              id: 17,
              name: 'Chicken Parmesan',
              description:
                'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese.',
            },
            {
              id: 18,
              name: 'Fish and Chips',
              description:
                'Battered cod served with tartar sauce and French fries.',
            },
          ],
        },
      ],
      type: 'dinner',
    },
  ];


  selectedMenu: Menu = new Menu();
  AddMenu() {
    if (this.selectedMenu.id === 0) {
      this.selectedMenu.id = this.menuArray.length + 1;
      const section = {
        id: 1,
        name: 'Comida Favorita',
        description: 'Esta comida es para tener un preámbulo',
        items: this.itemsArray,
      };
      this.selectedMenu.sections.push(section);
      this.menuArray.push(this.selectedMenu);
    }

    this.selectedMenu = new Menu();
    this.itemsArray = [];
  }

  EditMenu(menu: Menu) {
    this.selectedMenu = menu;
    this.itemsArray = menu.sections[0].items;
  }

  DeleteMenu(menu: Menu) {
    if (confirm(`Are you sure you want to delete the menu ${menu.name}?`)) {
      this.menuArray = this.menuArray.filter((x) => x !== menu);
    }
  }

  //items
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.itemsArray.push({
        id: 0,
        name: value,
        description: 'Descripcion de los items',
      });
    }

    event.chipInput!.clear();
  }

  remove(items: Items): void {
    const index = this.itemsArray.indexOf(items);

    if (index >= 0) {
      this.itemsArray.splice(index, 1);
    }
  }

  edit(Item: Items, event: MatChipEditedEvent) {
    const name = event.value.trim();

    if (!name) {
      this.remove(Item);
      return;
    }

    const index = this.itemsArray.indexOf(Item);
    if (index >= 0) {
      this.itemsArray[index].name = name;
    }
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(OpenModal, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'home-dialog',
  templateUrl: 'home-dialog.html',
  styleUrls: ['./home.component.css'],
})
export class OpenModal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Menu) {
    console.log(data);
  }
}
