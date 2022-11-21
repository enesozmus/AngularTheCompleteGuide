import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  serverID: number = 1;
  serverStatus: boolean = false;

  getServerColor(){
    return 'blue';
  }

  allowNewServer: boolean = true;

  ngOnInit(): void {
    setTimeout(() => { this.allowNewServer = false; }, 5000)
  }


  brand: string = 'Mercedes-Benz';

  onCreateServer(){
    this.brand = 'Chevrolet!';
  }

  onSelectedBrand: string = 'başlangıç değeri';
  onGetTheBrand($event: Event){
    console.log($event);
    console.log(($event.target as HTMLInputElement).value);
    this.onSelectedBrand = ($event.target as HTMLInputElement).value;
  }
}
