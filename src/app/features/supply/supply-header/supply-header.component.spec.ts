import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyHeaderComponent } from './supply-header.component';

describe('SupplyHeaderComponent', () => {
  let component: SupplyHeaderComponent;
  let fixture: ComponentFixture<SupplyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
