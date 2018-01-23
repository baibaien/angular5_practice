import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqltestComponent } from './graphqltest.component';

describe('GraphqltestComponent', () => {
  let component: GraphqltestComponent;
  let fixture: ComponentFixture<GraphqltestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqltestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
