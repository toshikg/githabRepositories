import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDescriptionEditComponent } from './repo-description-edit.component';

describe('EditTextComponent', () => {
  let component: RepoDescriptionEditComponent;
  let fixture: ComponentFixture<RepoDescriptionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDescriptionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDescriptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
