import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitViewComponent } from './init-view.component';

describe('InitViewComponent', () => {
  let component: InitViewComponent;
  let fixture: ComponentFixture<InitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
