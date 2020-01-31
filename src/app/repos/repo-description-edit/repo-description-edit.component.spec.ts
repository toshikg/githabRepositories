import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDescriptionEditComponent } from './repo-description-edit.component';
import {ElementRef, NO_ERRORS_SCHEMA} from '@angular/core';
import {ReposService} from '../repos.service';

describe('EditTextComponent', () => {
  let component: RepoDescriptionEditComponent;
  let fixture: ComponentFixture<RepoDescriptionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoDescriptionEditComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: ReposService, useValue: jasmine.createSpyObj('ReposService', ['saveDescToLocalStorage'])},
        {provide: ElementRef, useValue: jasmine.createSpyObj('ElementRef', ['nativeElement'])}
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDescriptionEditComponent);
    component = fixture.componentInstance;
    // @ts-ignore
    fixture.componentInstance.repoId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveDescToLocalStorage onInit', () => {
    fixture.componentInstance.text = 'some text';

    spyOn(fixture.componentInstance.textCtrl, 'value');

    fixture.detectChanges();

    fixture.componentInstance.ngOnInit();


    expect(fixture.componentInstance.textCtrl.value).toBe('some text');
  });

  it('should emit event on save', () => {
    const emit = spyOn(fixture.componentInstance.save, 'emit');

    const inputValue = 'some value';
    fixture.componentInstance.textCtrl.setValue(inputValue);

    fixture.componentInstance.onSave();

    expect(emit).toHaveBeenCalledWith(inputValue);
  });

  it('should call saveDescToLocalStorage', () => {
    fixture.componentInstance.onSave();

    // @ts-ignore
    expect(fixture.componentInstance.reposService.saveDescToLocalStorage).toHaveBeenCalledWith(1, '');
  });

  it('should emit event on cancel', () => {
    const emit = spyOn(fixture.componentInstance.cancel, 'emit');

    fixture.componentInstance.onCancel();

    expect(emit).toHaveBeenCalled();
  });

  it('should call saveDescToLocalStorage', () => {
    fixture.componentInstance.onCancel();

    // @ts-ignore
    expect(fixture.componentInstance.reposService.saveDescToLocalStorage).toHaveBeenCalledWith(1, '');
  });
});
