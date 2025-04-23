import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, filter, takeUntil } from 'rxjs';
import { SearchStateService } from '../../services/search-state.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public readonly PLACEHOLDER: string = 'Enter address...';

  public searchControl: FormControl<string | null> = new FormControl('');

  private readonly _destroy$: Subject<void> = new Subject<void>();

  public constructor(private readonly _searchStateService: SearchStateService) {}

  public ngOnInit(): void {
    const savedQuery = this._searchStateService.getSearchQuery();
    if (savedQuery) {
      this.searchControl.setValue(savedQuery);
    }
    this._setupSearch();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((value): value is string => value !== null && value.length >= 2),
      takeUntil(this._destroy$)
    ).subscribe((value: string) => {
      this._searchStateService.setSearchQuery(value);
      this.search.emit(value);
    });
  }
}
