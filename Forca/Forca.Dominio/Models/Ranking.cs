using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Forca.Dominio.Models
{
    public class Ranking
    {
        public int Id { get; set; }

        public Jogador Jogador { get; set; }

        public int Pontos { get; set; }

        public Dificuldade Dificuldade { get; set; }
    }
}
