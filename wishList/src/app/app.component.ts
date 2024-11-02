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
  title = 'wishList';

  newWishText = ""

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
  };
}
