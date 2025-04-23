import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BikeService } from './bike.service';
import { Bike, BikeSearchResponse } from '../models/bike.model';

describe('BikeService', () => {
  let service: BikeService;
  let httpMock: HttpTestingController;

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

  const mockSearchResponse: BikeSearchResponse = {
    bikes: [mockBike]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BikeService]
    });

    service = TestBed.inject(BikeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search bikes', () => {
    const location = 'New York';

    service.searchBikes(location).subscribe(response => {
      expect(response).toEqual(mockSearchResponse);
    });

    const req = httpMock.expectOne(request => 
      request.url === 'https://bikeindex.org/api/v3/search' &&
      request.method === 'GET' &&
      request.params.get('location') === location &&
      request.params.get('distance') === '100' &&
      request.params.get('stolenness') === 'all' &&
      request.params.get('per_page') === '100'
    );

    req.flush(mockSearchResponse);
  });

  it('should get bike details', () => {
    const bikeId = 1;

    service.getBikeDetails(bikeId).subscribe(response => {
      expect(response).toEqual({ bike: mockBike });
    });

    const req = httpMock.expectOne(`https://bikeindex.org/api/v3/bikes/${bikeId}`);
    expect(req.request.method).toBe('GET');
    req.flush({ bike: mockBike });
  });
});
