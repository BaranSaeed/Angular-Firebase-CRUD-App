import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabrComponent } from './navabr.component';

describe('NavabrComponent', () => {
  let component: NavabrComponent;
  let fixture: ComponentFixture<NavabrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavabrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
