using Forca.Dominio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Dominio.Repositorios
{
    public interface IRepositorioJogador
    {
        void SalvarPontuacaoJogador(Jogador jogador);

        IEnumerable<Jogador> LeaderRanking(int pagina, int tamanhoPagina);

        int QuantidadeJogadores();
    }
}
