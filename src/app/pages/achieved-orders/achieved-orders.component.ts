import { Component } from '@angular/core';
import { CardComponent } from '../../components/reusable/card/card.component';
import { SearchBarComponent } from '../../components/reusable/search-bar/search-bar.component';

@Component({
  selector: 'app-achieved-orders',
  imports: [CardComponent, SearchBarComponent],
  templateUrl: './achieved-orders.component.html',
  styleUrl: './achieved-orders.component.css'
})
export class AchievedOrdersComponent {

}
