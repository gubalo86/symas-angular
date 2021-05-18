using Microsoft.AspNetCore.Http;
using Symas.Core.Service;
using Symas.SymasSalud.Interfaces;
using Symas.SymasSalud.Models;
using Symas.SymasSalud.Repositories;

namespace Symas.SymasSalud.Services
{
    public enum ProductServiceErrors
    {
        Unknow
    }
    public class ProductService: 
        BaseModelServiceWithRepository<IProductRepository, ProductModel>, IProductService
    {
        public ProductService(
            IProductRepository productRepository):base(productRepository)
        { }
    }
}
