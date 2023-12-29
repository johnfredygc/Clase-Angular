import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoshaloComponent } from './videoshalo.component';

describe('VideoshaloComponent', () => {
  let component: VideoshaloComponent;
  let fixture: ComponentFixture<VideoshaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoshaloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoshaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
