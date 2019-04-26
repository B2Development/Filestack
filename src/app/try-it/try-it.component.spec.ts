import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryItComponent } from './try-it.component';

describe('TryItComponent', () => {
  let component: TryItComponent;
  let fixture: ComponentFixture<TryItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
