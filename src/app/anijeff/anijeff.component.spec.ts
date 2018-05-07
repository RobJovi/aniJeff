import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnijeffComponent } from './anijeff.component';

describe('AnijeffComponent', () => {
  let component: AnijeffComponent;
  let fixture: ComponentFixture<AnijeffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnijeffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnijeffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
