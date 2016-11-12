using Forca.Dominio;
using Forca.Dominio.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Testes.Repositorio.Mocks
{
    public class RepositorioPalavraMock : IRepositorioPalavra
    {
        List<Palavra> listaPalavras = new List<Palavra>
        {
            new Palavra { Id = 1, Composicao = "Jeremias"},
            new Palavra { Id = 2, Composicao = "Josisvaldo"},
            new Palavra { Id = 3, Composicao = "Jubiscleison" }
        };

        public IEnumerable<Palavra> ListarPalavras()
        {
            return listaPalavras.ToList();
        }
    }
}
