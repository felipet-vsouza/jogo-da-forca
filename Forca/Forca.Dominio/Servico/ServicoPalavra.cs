using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Dominio.Servico
{
    public class ServicoPalavra
    {
        public string EsconderPalavra(string palavra)
        {
            int tamanho = palavra.Length;
            return new String('-', tamanho);
        }
    }
}
