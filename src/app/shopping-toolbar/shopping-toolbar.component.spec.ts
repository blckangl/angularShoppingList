import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingToolbarComponent } from './shopping-toolbar.component';

describe('ShoppingToolbarComponent', () => {
  let component: ShoppingToolbarComponent;
  let fixture: ComponentFixture<ShoppingToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
