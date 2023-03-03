import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './models/Menu/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiUrl = 'https://localhost:7202/hosts/1/menus';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

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

  constructor(private http: HttpClient) {}

  AddOrEditMenu() {
    if (this.selectedMenu.id === 0) {
      this.selectedMenu.id = this.menuArray.length + 1;
      this.menuArray.push(this.selectedMenu);

      // Realizar solicitud POST al servidor
      this.http
        .post<Menu>(this.apiUrl, this.selectedMenu, this.httpOptions)
        .subscribe(
          (menu) => {
            console.log('Menú agregado:', menu);
          },
          (error) => {
            console.error('Error al agregar el menú:', error);
          }
        );
    }

    this.selectedMenu = new Menu();
  }
}
