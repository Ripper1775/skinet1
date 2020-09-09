import { CdkStepper } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from './../../basket/basket.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { IBasket } from 'src/app/shared/models/basket';
import { timeStamp } from 'console';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe((response: any) => {
      this.appStepper.next();
    }, error => {
      console.log(error);
    });
  }

}
