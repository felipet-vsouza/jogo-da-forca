using Forca.Dominio.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Dominio.Servico
{
    public class ServicoPalavra
    {
        private readonly IRepositorioPalavra repositorio;

        public ServicoPalavra(IRepositorioPalavra repositorio)
        {
            this.repositorio = repositorio;
        }

        public Palavra SortearPalavra()
        {
            var palavras = this.repositorio.BuscarTodas();
            int numeroMaximo = palavras.Count();

            Random rnd = new Random();
            int indiceSorteado = rnd.Next(0, numeroMaximo);

            return palavras.ElementAt(indiceSorteado);
        }

        public int GetQuantidade()
        {
            return this.repositorio.ContadorDePalavras();
        }
    }
}
