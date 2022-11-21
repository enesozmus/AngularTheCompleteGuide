import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.scss']
})
export class PartOneComponent {

  @Output('siyah') blackCar = new EventEmitter<{ brand: string, color: string, year: string }>();
  @Output() redCar = new EventEmitter<{ brand: string, color: string, year: string }>();
  @Output() greenCar = new EventEmitter<{ brand: string, color: string, year: string }>();


  newCarBrand: string = '';
  newCarColor: string = '';
  newCarYear: string = '';

  onBlack() {
    this.blackCar.emit({
      brand: this.newCarBrand,
      color: this.newCarColor,
      year: this.newCarYear
    });
  }

  onRed() {
    this.redCar.emit({
      brand: this.newCarBrand,
      color: this.newCarColor,
      year: this.newCarYear
    });
  }

  onGreen() {
    this.greenCar.emit({
      brand: this.newCarBrand,
      color: this.newCarColor,
      year: this.newCarYear
    });
  }

    // Getting Access to the Template Variables by calling a method
    understandingTemplateVariables(templateV: HTMLInputElement){
      console.log(templateV);
      /**
       * <input type="number" class="form-control" #year>
       * 
       * We actually got the input element itself.
       * log → → → : <input _ngcontent-gay-c48="" type="number" class="form-control">
       */
      console.log(templateV.value);
      /**
       * Not all elements have the same properties.
       */
    }
  
    // Getting Access to the Template Variables or any elements with @ViewChild
    @ViewChild('templateV', {static: true}) templateV: ElementRef;

    onGettingAccessToTheTemplateVariables(){
      console.log(this.templateV);
      console.log(this.templateV.nativeElement);
      console.log(this.templateV.nativeElement.value);
    }
}
