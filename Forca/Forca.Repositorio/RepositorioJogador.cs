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
        public IEnumerable<Jogador> LeaderRanking(int pagina, int tamanhoPagina, Dificuldade dificuldade)
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                return contexto.Jogador
                    .Where(jog => jog.Dificuldade == dificuldade)
                    .OrderByDescending(_ => _.Pontuacao)
                    .Skip(tamanhoPagina * (pagina - 1))
                    .Take(tamanhoPagina)
                    .ToList();
                //return contexto.Jogador.ToList().OrderByDescending(jogador => jogador.Pontuacao).Take(3);
            }
        }

        public int QuantidadeJogadoresPorDificuldade(Dificuldade dificuldade)
        {
            using (var contexto = new ContextoBaseDeDados())
            {
                return contexto.Jogador
                        .Where(jog => jog.Dificuldade == dificuldade)
                        .Count();
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
