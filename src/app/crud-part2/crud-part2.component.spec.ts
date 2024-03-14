import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPart2Component } from './crud-part2.component';

describe('CrudPart2Component', () => {
  let component: CrudPart2Component;
  let fixture: ComponentFixture<CrudPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudPart2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
