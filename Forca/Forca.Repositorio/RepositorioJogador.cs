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
