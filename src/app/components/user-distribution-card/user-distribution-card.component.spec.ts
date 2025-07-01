import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDistributionCardComponent } from './user-distribution-card.component';

describe('UserDistributionCardComponent', () => {
  let component: UserDistributionCardComponent;
  let fixture: ComponentFixture<UserDistributionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDistributionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDistributionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
