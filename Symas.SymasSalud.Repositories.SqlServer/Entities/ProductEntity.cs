using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Symas.SymasSalud.Repositories.SqlServer.Entities
{
    [Table("Product")]
    public class ProductEntity
    {
        [Key]
        public int Id { get; set; }
        public string ProductName { get; set; }
    }
}
