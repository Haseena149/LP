import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookforsearchingComponent } from './bookforsearching.component';

describe('BookforsearchingComponent', () => {
  let component: BookforsearchingComponent;
  let fixture: ComponentFixture<BookforsearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookforsearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookforsearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
