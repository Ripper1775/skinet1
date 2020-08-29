import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../orders.service';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { IOrder } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;

  constructor(private bcService: BreadcrumbService, private orderService: OrdersService, private activeRoute: ActivatedRoute) {
    this.bcService.set('@orderDetail', ''); }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService.getOrder(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(order => {
      this.order = order;
      this.bcService.set('@orderDetail', 'Order# ' + order.id.toString() + ' - ' + order.status);
    }, error => {
      console.log(error);
    });

  }

}
