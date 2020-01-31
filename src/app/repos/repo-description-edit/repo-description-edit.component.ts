import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ReposService} from '../repos.service';

@Component({
  selector: 'app-edit-text',
  templateUrl: './repo-description-edit.component.html',
  styleUrls: ['./repo-description-edit.component.scss']
})
export class RepoDescriptionEditComponent implements OnInit {

  @Input() text: string;
  @Input() repoId: number;
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();
  textCtrl: FormControl;

  constructor(private reposService: ReposService, private elementRef: ElementRef) {

  }

  onSave() {
    this.save.emit(this.textCtrl.value);
    this.reposService.saveDescToLocalStorage(this.repoId, '');
  }

  onCancel() {
    this.cancel.emit();
    this.reposService.saveDescToLocalStorage(this.repoId, '');
  }

  ngOnInit() {
    this.textCtrl = new FormControl(this.text);

    this.elementRef.nativeElement.querySelector('textarea').focus();

    this.textCtrl.valueChanges.subscribe((text) => {
      this.reposService.saveDescToLocalStorage(this.repoId, text);
    });
  }

}
