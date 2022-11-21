import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'female'];
  // Creating Custom Validators
  forbiddenUsernames = ['Chris', 'Anna'];
  /**
   * I want to create a new property which will hold my form in the end.
   * This will be of type FormGroup.
   * FormGroup, FormControl, FormArray ve FormRecord ile birlikte Angular'da formları tanımlamak için kullanılan dört temel yapı taşından biridir.
   *    → AbstractControl:  
   *                → This is an abstract class.
   *                → This is the base class for FormControl, FormGroup, and FormArray.
   *                → Değere, doğrulama durumuna, kullanıcı etkileşimlerine ve olaylara erişmek için temel işlevlerin çoğunu uygulayan
   * FormGroup, AbstractControl sınıfını genişletir.
   * FormGroup class'ı tek bir form için bir konteyner oluşturmamıza izin verir.
   * FormGroup instance'ı yapılandırma seçeneklerinin bir nesnesi olan bir bağımsız değişkene sahiptir.
   *      → Bu nesneyi, formun içinde ne olduğunu angular'ın anlamasına yardımcı olacak şekilde yapılandırabiliriz.
   * Bir grup FormControl instance'ının değerini ve geçerlilik durumunu izler.
   * Bir FormGroup, her bir FormControl alt öğesinin değerlerini, her denetim adı anahtar olacak şekilde tek bir nesnede toplar.
   * Örneğin, bir gruptaki kontrollerden biri geçersizse, grubun tamamı geçersiz hale gelir.
   */
  reactiveApproach: FormGroup;

  /**
   * We will initialize our form.
   * You should initialize it before rendering the template of course
   */

  ngOnInit(): void {
    /**
     * This is our first created form.
     * but this form doesn't have any controls, so let's add some.
     * Controls are basically just key-value pairs in this object.
     * let's have a look at our HTML code
     *      → We have a username field, an e-mail field and the radio buttons.
     */
    this.reactiveApproach = new FormGroup({});
    this.reactiveApproach = new FormGroup({
      // So it would make sense to have a username control.
      // to this FormControl constructor, we can pass a couple of arguments
      //    → 1. I want to set an initial state of null to have an empty field.
      //    → 2. The second argument will be a single validator or an array of validators we want to apply to this control.
      username: new FormControl('default', [Validators.required, Validators.minLength(2), this.forbiddenNames.bind(this)]),
      email: new FormControl('', [Validators.required, Validators.email], this.forbiddenEmails),
      gender: new FormControl('female'),
      // work with array
      // it could be no hobbies or 10 or 100.
      // Bir FormArray, her bir FormControl alt öğesinin değerlerini bir dizide toplar.
      hobbies: new FormArray([])    // → formArrayName=""

      /* Grouping Controls
        userData: new FormGroup({
          username: new FormControl('default', [Validators.required, Validators.minLength(2)]),
          email: new FormControl('', [Validators.required, Validators.email]),
        }),
 
        1.  aynı div'in içine atılır    → <div formGroupName="userData"></div>
        2.  <span *ngIf="reactiveApproach.get('userData.username').errors['required']">This field is required!</span>

      */

      /**
       * Bu, FormGroup, FormArray ve FormRecord ile birlikte Angular formların dört temel yapı taşından biridir.
       * Değere, doğrulama durumuna, kullanıcı etkileşimlerine ve olaylara erişmek için temel işlevlerin çoğunu uygulayan AbstractControl sınıfını genişletir.
       * FormControl, AbstractControl sınıfını genişletir.
       * FormControl, tek bir form denetiminin değerini ve doğrulama durumunu izler.
       * FormControl, tek bir input field'nı kontrol eden bir class'tır.
       *      → Formumuzdaki her bir input field'ı için bir FormControl nesnemiz olmalıdır.
       * FormControl, constructor'ına birkaç argument geçebiliriz.
       *      → 1. The first argument is the initial state.
       *      → 2. The second argument will be a single validator or an array of validators we want to apply to this control.
       *      → 3. The third argument will be potential asynchronous validators.
       */

      /** → Now, we will bind our FormGroup to the form in the template.
       * We somehow need to synchronize our HTML inputs and our own form.
       * We need to establish a relationship between the FormGroup in our class and the form element in the template.
       * 
       *      FormGroup ↔ <form></form>
       * Right now, Angular doesn't know which of our TypeScript controls here relates to which input in our template code.
       * We have to add some directives to help Angular understand it.
       *  1. The first directive we need to add on the form is the [formGroup]="" directive via "property binding".
       *        → This tells Angular 'Hey! Don't create a form for me! Just take my own formGroup".
       *        💯 Now this form is synchronized with the form we created in TypeScript.
       * 2. The second directive we need to add on the form is formControlName="" directive.
       *        → This tells Angular the control value in our TypeScript code for the input field here.
       *        💯 Now these input fields are synchronized with the form we created in TypeScript.
       */
    });

    // The valueChanges fired whenever we change something about the form.
    this.reactiveApproach.valueChanges.subscribe(value => console.log(value));
    // valid-invalid-pending
    // → you can listen to or you can subscribe to if you really want to closely watch what happens in your form
    this.reactiveApproach.statusChanges.subscribe(status => console.log(status));
    // setValue & patchValue
    this.reactiveApproach.setValue({
      'username': 'Max',
      'email': 'Max email',
      'gender': 'male',
      'hobbies': []
    });
    // kısmi
    this.reactiveApproach.patchValue({
      'username': 'Kısmi',
    });
    // reset
    this.reactiveApproach.reset();

  }
 

  /** Submitting the Form
   * x → In the template driven approach, we used (ngSubmit)="".
   * 💯 We will continue to use (ngSubmit)="".
 */
  onSubmit() {
    console.log(this.reactiveApproach);
  }

  // work with array
  onAddHobby() {
    (<FormArray>this.reactiveApproach.get('hobbies'))
      .push(new FormControl('', Validators.required));
  }

  // work with array
  get controls() {
    return (this.reactiveApproach.get('hobbies') as FormArray).controls;
  }

  // Creating Custom Validators
  // The validator is just a function after all.
  forbiddenNames(control: FormControl): { [s: string]: boolean } {

    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    // if validation is successful, you have to pass nothing or null
    return null;
  }

  /** Creating a Custom Async Validator
   * To check if the name is invalid we  might need to reach out to a web server.
   * This is an asynchronous operation because the response is not coming back instantly.
   * We also kind of need asynchronous validators which are able to wait for a response before returning true or false.
   */
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}





/** If you decide to use an Observable for an async validator
 * forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Observable<any>(observer => {
      setTimeout(() => {
        const email = control.value ? control.value.toLowerCase() : '';
        if (this.forbiddenEmailList.indexOf(email) !== -1) {
          observer.next({forbiddenEmail: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 500);
    });
 */

/**
 forbiddenEmails: (control: FormControl): Promise<any> | Observable<any> => {
    return of(control.value).pipe(
    map(value => value === 'test@test.com' ? { 'emailIsForbidden': true } : null),
    delay(1500)
    );
  }
  *ngIf="signupForm.get('userData.email').errors?.emailIsForbidden"
 */



/*

  ngOnInit() {

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'max@test.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signupForm.patchValue({
      userData: {
        username: 'Anna',
      },
    });
*/
