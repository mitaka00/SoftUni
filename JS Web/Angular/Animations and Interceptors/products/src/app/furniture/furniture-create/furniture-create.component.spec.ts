import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureCreateComponent } from './furniture-create.component';

describe('FurnitureCreateComponent', () => {
  let component: FurnitureCreateComponent;
  let fixture: ComponentFixture<FurnitureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
