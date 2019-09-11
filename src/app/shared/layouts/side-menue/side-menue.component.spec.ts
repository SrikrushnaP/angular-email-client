import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenueComponent } from './side-menue.component';

describe('SideMenueComponent', () => {
  let component: SideMenueComponent;
  let fixture: ComponentFixture<SideMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
