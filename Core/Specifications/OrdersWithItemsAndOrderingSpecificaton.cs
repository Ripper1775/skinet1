using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrdersWithItemsAndOrderingSpecificaton : BaseSpecification<Order>
    {
        public OrdersWithItemsAndOrderingSpecificaton(string email) : base(o => o.BuyerEmail == email)
        {
            AddIncude(o => o.OrderItems);
            AddIncude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public OrdersWithItemsAndOrderingSpecificaton(int id, string email) : base(o => o.Id == id && 
        o.BuyerEmail == email)
        {
            AddIncude(o => o.OrderItems);
            AddIncude(o => o.DeliveryMethod);
        }
    }
}