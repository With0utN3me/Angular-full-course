import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem ('Learn Angular'),
    new WishItem ('Eat', true),
    new WishItem ('Find a girlfriend')
  ];

  filter: (item: WishItem) => boolean = () => true;
  }

