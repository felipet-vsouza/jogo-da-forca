using Forca.Dominio;
using Forca.Dominio.Models;
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

        public DbSet<Jogador> Jogador { get; set; }

        public DbSet<Ranking> Ranking { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
    }
}
