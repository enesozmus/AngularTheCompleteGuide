import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    /*
        Now this is using an observable.
        Params here is an observable to which we subscribe.

        .params → Bu rotaya dahil edilen matris parametrelerinin bir gözlemlenebiliri.
                → Bu bir rota parametreleri akışıdır ve bu akış, yeni bir sayfaya her gittiğimizde bize yeni bir rota parametresi verir.

        Gözlenebilirler, veri akışındaki değişikliklerden haberdar olmak için abone olduğunuz yapılardır.
        Gözlenebilirler bir veri akışıdır ve yeni bir veri parçası yayınlandığında, aboneliğimiz bundan haberdar olacaktır.
    */
    this.activatedRoute.params.subscribe((params: Params) => {
      // The + converts the string to a number. No more magic, different from e.g. parseInt() or parseFloat().
      this.id = +[params.id];
      // Bu rotaya dahil edilen matris parametreleri
      // bizim html'e bastığımız kendi başına orada bekleyen ID'imize parametreden gelen ID'yi bas
    });
  }

}
