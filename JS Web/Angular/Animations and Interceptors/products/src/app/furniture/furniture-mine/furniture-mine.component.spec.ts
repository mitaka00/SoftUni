import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureMineComponent } from './furniture-mine.component';

describe('FurnitureMineComponent', () => {
  let component: FurnitureMineComponent;
  let fixture: ComponentFixture<FurnitureMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
