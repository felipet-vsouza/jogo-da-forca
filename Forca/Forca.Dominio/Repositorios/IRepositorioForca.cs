using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Dominio.Repositorios
{
    public interface IRepositorioForca
    {
        void SalvarPontuacaoJogador();

        IEnumerable<Palavra> ListarPalavras();
    }
}
