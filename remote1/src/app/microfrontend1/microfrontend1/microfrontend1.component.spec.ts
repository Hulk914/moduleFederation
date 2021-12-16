import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Microfrontend1Component } from './microfrontend1.component';

describe('Microfrontend1Component', () => {
  let component: Microfrontend1Component;
  let fixture: ComponentFixture<Microfrontend1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Microfrontend1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Microfrontend1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
