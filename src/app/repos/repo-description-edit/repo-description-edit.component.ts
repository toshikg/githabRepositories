import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-text',
  templateUrl: './repo-description-edit.component.html',
  styleUrls: ['./repo-description-edit.component.scss']
})
export class RepoDescriptionEditComponent implements OnInit {

  @Input() text: string;
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();
  private textCtrl: FormControl;

  constructor() {

  }

  onSave() {
    this.save.emit(this.textCtrl.value);
  }

  onCancel() {
    this.cancel.emit();
  }

  ngOnInit() {
    this.textCtrl = new FormControl(this.text);
  }

}
