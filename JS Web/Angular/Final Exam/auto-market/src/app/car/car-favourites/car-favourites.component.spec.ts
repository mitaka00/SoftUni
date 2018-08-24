import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFavouritesComponent } from './car-favourites.component';

describe('CarFavouritesComponent', () => {
  let component: CarFavouritesComponent;
  let fixture: ComponentFixture<CarFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
