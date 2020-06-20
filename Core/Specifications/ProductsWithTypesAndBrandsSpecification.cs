using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandSpecification()
        {
            AddIncude(x => x.ProductType);
            AddIncude(x => x.ProductBrand);
        }

        public ProductsWithTypesAndBrandSpecification(int id) : base(x => x.Id == id)
        {
            AddIncude(x => x.ProductType);
            AddIncude(x => x.ProductBrand);
        }
    }
}