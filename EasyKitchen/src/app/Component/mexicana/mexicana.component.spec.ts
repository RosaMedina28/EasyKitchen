import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanaComponent } from './mexicana.component';

describe('MexicanaComponent', () => {
  let component: MexicanaComponent;
  let fixture: ComponentFixture<MexicanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MexicanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
