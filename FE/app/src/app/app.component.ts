import { Component } from '@angular/core';
import { Menu } from './models/menu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuArray: Menu[] = [
    {
      id: 1,
      name: 'Test Menu',
      description: 'Test Description',
      averageRating_Value: '5',
      averageRating_NumRatings: '1',
      hostId: 1,
      createdDateTime: '2019-01-01',
      updatedDateTime: '2019-01-01',
    },
    {
      id: 2,
      name: 'Test Menu 2',
      description: 'Test Description 2',
      averageRating_Value: '5',
      averageRating_NumRatings: '1',
      hostId: 2,
      createdDateTime: '2019-01-01',
      updatedDateTime: '2019-01-01',
    },
    {
      id: 3,
      name: 'Test Menu 3',
      description: 'Test Description 3',
      averageRating_Value: '5',
      averageRating_NumRatings: '1',
      hostId: 3,
      createdDateTime: '2019-01-01',
      updatedDateTime: '2019-01-01',
    }
  ];
}
