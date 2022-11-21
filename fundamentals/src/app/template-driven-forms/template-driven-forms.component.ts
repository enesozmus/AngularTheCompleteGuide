import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent  {

    // access to temp. variables
    @ViewChild('ourCustomFormName') ourForm: NgForm;
    // default value
    defaultQuestion: string = 'pet';
    // two way databinding
    answer: string = '';
    // radio buttons
    genders: Array<string> = ['male', 'female'];
    // default value
    public defaultGender: string = 'male';
    //defaultGender2 = this.genders[0];

    // Javascript Representation of the Form
    submitted: boolean = false;
    user = {
        username: '',
        email: '',
        secretquestion: '',
        answerArea: '',
        gender: ''
    }
    // formda bir şey öner
    suggestUserName() {
        const suggestedName = 'Superuser';
        const suggestedName2 = 'Other Method';
        this.ourForm.setValue({
            userData: {
                username: suggestedName,
                email: ''
            },
            secretquestion: 'teacher',
            answerArea: '',
            gender: 'male'
        });
        this.ourForm.form.patchValue({
            userData: {
                username: suggestedName2,
            }
        });
    }
    // formu submit et
    onSubmit() {
        //ourCustomFormName: NgForm
        //console.log('tetiklendi!');
        //console.log(ourCustomFormName);
        console.log(this.ourForm);
        this.submitted = true;
        this.user.username = this.ourForm.value.userData.username;
        this.user.email = this.ourForm.value.userData.email;
        this.user.secretquestion = this.ourForm.value.secretquestion;
        this.user.answerArea = this.ourForm.value.answerArea;
        this.user.gender = this.ourForm.value.gender;
    }
    // formu resetle
    resetForm(){
        this.ourForm.reset();
    }
}


    /**
       * Array
       * 1.   → let fruits: string[] = ['Apple', 'Orange', 'Banana'];
       * 2.   → let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
       * 3.   → let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
       * 4.   → let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
       *      → let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
    */
