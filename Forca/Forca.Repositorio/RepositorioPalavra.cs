using Forca.Dominio.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Forca.Dominio;
using Forca.Repositorio.ContextoDeDados;
using Forca.Dominio.Models;
using System.Data.Entity;

namespace Forca.Repositorio
{
    public class RepositorioPalavra : IRepositorioPalavra
    {
        public IEnumerable<Palavra> ListarPalavras()
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                return contexto.Palavra.ToList();
            }
        }
    }
}
