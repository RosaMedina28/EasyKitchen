import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilesComponent } from './chiles.component';

describe('ChilesComponent', () => {
  let component: ChilesComponent;
  let fixture: ComponentFixture<ChilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
