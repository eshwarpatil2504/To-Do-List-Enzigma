import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eshwarListComponent } from './eshwar-list.component';

describe('UserListComponent', () => {
  let component: eshwarListComponent;
  let fixture: ComponentFixture<eshwarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [eshwarListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(eshwarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
