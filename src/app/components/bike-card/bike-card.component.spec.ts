import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BikeCardComponent } from './bike-card.component';
import { Bike } from '../../models/bike.model';

describe('BikeCardComponent', () => {
  let component: BikeCardComponent;
  let fixture: ComponentFixture<BikeCardComponent>;

  const mockBike: Bike = {
    id: 1,
    title: 'Test Bike',
    serial: 'TEST123',
    manufacturer_name: 'Test Manufacturer',
    frame_model: 'Test Model',
    year: 2023,
    stolen: true,
    stolen_location: 'Test Location',
    thumb: 'test-thumb.jpg',
    large_img: 'test-large.jpg',
    description: 'Test Description'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeCardComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeCardComponent);
    component = fixture.componentInstance;
    // @ts-ignore
    component.bike = () => mockBike;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display bike title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bike-card-info-title')?.textContent).toContain(mockBike.title);
  });

  it('should display manufacturer and year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bike-card-info-description')?.textContent)
      .toContain(`${mockBike.manufacturer_name} - ${mockBike.year}`);
  });

  it('should display stolen location', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bike-card-info-description-location')?.textContent)
      .toContain(mockBike.stolen_location);
  });

  it('should display default image when thumb is not provided', () => {
    const bikeWithoutThumb = { ...mockBike, thumb: null };
    // @ts-ignore
    component.bike = () => bikeWithoutThumb;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('assets/no-bike.svg');
  });


  it('should have correct router link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe(`/bike/${mockBike.id}`);
  });
});
