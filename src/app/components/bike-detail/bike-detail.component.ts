import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike.model';

@Component({
  selector: 'app-bike-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.scss']
})
export class BikeDetailComponent implements OnInit {
  public bike: Bike | null = null;
  public loading: boolean = true;
  public error: string | null = null;

  public constructor(
    private _bikeService: BikeService,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const bikeId: number = Number(this._route.snapshot.paramMap.get('id'));

    if (bikeId) {
      this._bikeService.getBikeDetails(bikeId).subscribe({
        next: (response:{bike: Bike}) => {
          this.bike = response.bike;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load bike details. Please try again.';
          this.loading = false;
          console.error('Error failed to load bike details:', err);
        }
      });
    } else {
      this.error = 'Invalid bike ID';
      this.loading = false;
    }
  }
}
