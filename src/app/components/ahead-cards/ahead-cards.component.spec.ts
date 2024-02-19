import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AheadCardsComponent } from './ahead-cards.component';

describe('AheadCardsComponent', () => {
  let component: AheadCardsComponent;
  let fixture: ComponentFixture<AheadCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AheadCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AheadCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
