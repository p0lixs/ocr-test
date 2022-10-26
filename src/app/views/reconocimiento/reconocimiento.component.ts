import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';
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
  public imgSrc: string | undefined;
  public progressValue = 0;
  public loading = false;
  public result: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  upLoadFile(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => (this.imgSrc = reader.result?.toString());
    reader.readAsDataURL(this.file);
  }

  onRecognise() {
    if (this.file) {
      this.startRecognition(this.file);
    }
  }
  startRecognition(file: any) {
    this.loading = true;
    from(
      tesseract.recognize(file, 'spa', {
        logger: (m) => {
          if (m.status == 'recognizing text') {
            this.progressValue = m.progress * 100;
          }
        },
      })
    ).subscribe(
      (res) => {
        console.log(res);
        this.result = res.data.hocr;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get imgValue() {
    return this.form.get('img')?.value;
  }
}
