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
        public Palavra SortearPalavra(IRepositorioPalavra repositorio)
        {
            int numeroMaximo = repositorio.ContadorDePalavras();
            Random rnd = new Random();
            int idPalavra = rnd.Next(1, numeroMaximo);
            
            Palavra palavraSorteada = (Palavra)repositorio.BuscarTodas().First(palavra => palavra.Id == idPalavra);

            return palavraSorteada;
        }
    }
}
