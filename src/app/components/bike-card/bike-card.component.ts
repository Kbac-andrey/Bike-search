import { Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Bike } from '../../models/bike.model';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent {
  public bike: InputSignal<Bike> = input.required<Bike>();
}
