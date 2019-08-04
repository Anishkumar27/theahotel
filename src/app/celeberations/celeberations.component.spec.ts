import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleberationsComponent } from './celeberations.component';

describe('CeleberationsComponent', () => {
  let component: CeleberationsComponent;
  let fixture: ComponentFixture<CeleberationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeleberationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeleberationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
