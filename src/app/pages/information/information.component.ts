import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/reusable/card/card.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class InformationComponent {

}
