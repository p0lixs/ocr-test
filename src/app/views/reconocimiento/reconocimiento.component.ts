import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as tesseract from 'tesseract.js';

@Component({
  selector: 'app-reconocimiento',
  templateUrl: './reconocimiento.component.html',
  styleUrls: ['./reconocimiento.component.scss'],
})
export class ReconocimientoComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    img: new FormControl(null, Validators.required),
  });
  public file: File;
  public progressValue = 0;
  public loading = false;
  public result: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  upLoadFile(event: any) {
    this.file = event.target.files[0];
  }

  onRecognise() {
    if (this.file) {
      this.startRecognition(this.file);
    }
  }
  startRecognition(file: any) {
    this.loading = true;
    tesseract
      .recognize(file, 'spa', {
        logger: (m) => {
          console.log(m);
          if (m.status == 'recognizing text') {
            this.progressValue = m.progress * 100;
          }
        },
      })
      .then((res) => {
        console.log(res);
        this.result = res.data.hocr;
        this.loading = false;
      });
  }
  get imgValue() {
    return this.form.get('img')?.value;
  }
}
