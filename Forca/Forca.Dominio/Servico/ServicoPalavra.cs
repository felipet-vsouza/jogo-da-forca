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
            int numeroMaximo = this.repositorio.ContadorDePalavras();
            Random rnd = new Random();
            int idPalavra = rnd.Next(1, numeroMaximo);
            
            Palavra palavraSorteada = (Palavra) this.repositorio.BuscarTodas().First(palavra => palavra.Id == idPalavra);

            return palavraSorteada;
        }
    }
}
