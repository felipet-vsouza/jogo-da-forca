using Forca.Dominio;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Repositorio.ContextoDeDados
{
    public class ContextoBaseDeDados : DbContext
    {
        public ContextoBaseDeDados() : base("ConexaoBanco")
        {
        }

        public DbSet<Palavra> Palavra { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
