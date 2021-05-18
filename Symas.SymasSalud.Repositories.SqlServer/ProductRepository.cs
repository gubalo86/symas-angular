using AutoMapper;
using LiveFree.Core.Repository.EntityFramework;
using Microsoft.AspNetCore.Http;
using Symas.SymasSalud.Models;
using Symas.SymasSalud.Repositories.SqlServer.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Symas.SymasSalud.Repositories.SqlServer
{
    public class ProductRepository: BaseRepositoryEntityFramework
        <ProductModel, ProductEntity, SymasSaludDbContext>,
        IProductRepository
    {
        public ProductRepository(
            SymasSaludDbContext context,
            IMapper mapper//,
            //IHttpContextAccessor httpContextAccessor
            ) :base(
                context,
                mapper
                //, httpContextAccessor
                )
        {}
    }
}
