import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  ngOnInit(): void {
  }
  imageSrc: string = '';
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    bio: new FormControl(''),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) { }

  get form(){
    return this.myForm.controls;
  }

  onSelectFile(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  submit(){
    console.log(this.myForm.value);
    alert('Post to a web service....');
  }
}
