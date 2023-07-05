import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CActivityComponent } from './c-activity.component';

describe('CActivityComponent', () => {
  let component: CActivityComponent;
  let fixture: ComponentFixture<CActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CActivityComponent]
    });
    fixture = TestBed.createComponent(CActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
