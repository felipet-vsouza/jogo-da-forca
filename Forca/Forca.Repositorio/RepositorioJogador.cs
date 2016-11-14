using Forca.Dominio.Models;
using Forca.Dominio.Repositorios;
using Forca.Repositorio.ContextoDeDados;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Repositorio
{
    public class RepositorioJogador : IRepositorioJogador
    {
        public IEnumerable<Jogador> LeaderRanking(int pagina, int tamanhoPagina)
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                return contexto.Jogador
                    .OrderByDescending(_ => _.Pontuacao)
                    .Skip(tamanhoPagina * (pagina - 1))
                    .Take(tamanhoPagina)
                    .ToList();
                //return contexto.Jogador.ToList().OrderByDescending(jogador => jogador.Pontuacao).Take(3);
            }
        }

        public int QuantidadeJogadores()
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                return contexto.Jogador.Count();
            }
        }
        public void SalvarPontuacaoJogador(Jogador jogador)
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                contexto.Entry<Jogador>(jogador).State = EntityState.Added;
                contexto.SaveChanges();
            }
        }
    }
}
