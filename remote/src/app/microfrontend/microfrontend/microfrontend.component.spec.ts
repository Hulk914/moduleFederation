import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendComponent } from './microfrontend.component';

describe('MicrofrontendComponent', () => {
  let component: MicrofrontendComponent;
  let fixture: ComponentFixture<MicrofrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrofrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrofrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
