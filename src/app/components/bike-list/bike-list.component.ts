import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BikeCardComponent } from '../bike-card/bike-card.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { BikeService } from '../../services/bike.service';
import { SearchStateService } from '../../services/search-state.service';
import { Bike, BikeSearchResponse } from '../../models/bike.model';

@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BikeCardComponent, SearchInputComponent],
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  public bikes: Bike[] = [];
  public loading: boolean = false;
  public error: string | null = null;

  public constructor(
    private readonly _bikeService: BikeService,
    private readonly _searchStateService: SearchStateService
  ) {}

  public ngOnInit(): void {
    const savedQuery = this._searchStateService.getSearchQuery();

    if (savedQuery) {
      this.onSearch(savedQuery);
    }
  }

  public onSearch(location: string): void {
    this.loading = true;
    this.error = null;

    this._bikeService.searchBikes(location).subscribe({
      next: (response: BikeSearchResponse) => {
        this.bikes = response.bikes;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load bikes. Please try again.';
        this.loading = false;
        console.error('Error loading bikes:', err);
      }
    });
  }
}
