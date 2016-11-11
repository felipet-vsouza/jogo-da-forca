using Forca.Dominio.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Forca.Dominio;
using Forca.Repositorio.ContextoDeDados;

namespace Forca.Repositorio
{
    public class RepositorioForca : IRepositorioForca
    {
        public IEnumerable<Palavra> ListarPalavras()
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                return contexto.Palavra.ToList();
            }
        }

        public void SalvarPontuacaoJogador()
        {
            throw new NotImplementedException();
        }
    }
}
