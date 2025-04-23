import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BikeListComponent } from './bike-list.component';
import { BikeService } from '../../services/bike.service';
import { SearchStateService } from '../../services/search-state.service';

describe('BikeListComponent', () => {
  let component: BikeListComponent;
  let fixture: ComponentFixture<BikeListComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BikeService', ['searchBikes']);

    await TestBed.configureTestingModule({
      imports: [
        BikeListComponent,
        RouterModule
      ],
      providers: [
        { provide: BikeService, useValue: spy },
        SearchStateService,
        provideHttpClient(withFetch())
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
