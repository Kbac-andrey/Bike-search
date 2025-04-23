import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BikeDetailComponent } from './bike-detail.component';
import { BikeService } from '../../services/bike.service';

describe('BikeDetailComponent', () => {
  let component: BikeDetailComponent;
  let fixture: ComponentFixture<BikeDetailComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BikeService', ['getBikeDetails']);

    await TestBed.configureTestingModule({
      imports: [BikeDetailComponent, RouterModule],
      providers: [
        { provide: BikeService, useValue: spy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
