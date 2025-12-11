import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tolbar } from './tolbar';

describe('Tolbar', () => {
  let component: Tolbar;
  let fixture: ComponentFixture<Tolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
