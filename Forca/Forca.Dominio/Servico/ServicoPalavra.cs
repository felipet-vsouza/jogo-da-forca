using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Dominio.Servico
{
    public class ServicoPalavra
    {
        public string EsconderPalavra(Palavra palavra)
        {
            string[] palavraSeparada = palavra.Composicao.Split(null);
            string palavraEscondida = "";

            foreach(string parte in palavraSeparada)
            {
                int tamanho = parte.Length;
                palavraEscondida += new String('-', tamanho) + " ";
            }
            palavraEscondida = palavraEscondida.Remove(palavraEscondida.Length-1);
            
            return palavraEscondida;
        }
    }
}
