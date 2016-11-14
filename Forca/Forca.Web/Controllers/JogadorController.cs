using Forca.Dominio.Models;
using Forca.Dominio.Repositorios;
using Forca.Repositorio;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;

namespace Forca.Web.Controllers
{
    public class JogadorController : ApiController
    {
        private IRepositorioJogador jogadores = new RepositorioJogador();
        
        // GET: Jogador
        [ResponseType(typeof(Jogador))]
        public IHttpActionResult PostJogador(Jogador jogador)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            jogadores.SalvarPontuacaoJogador(jogador);

            return Ok();
        }

        [ResponseType(typeof(Jogador))]
        public IHttpActionResult GetJogador(int pagina = 1, Dificuldade dificuldade = Dificuldade.Normal)
        {
            IEnumerable<Jogador> jogador = jogadores.LeaderRanking(pagina, 5, dificuldade);
            int qtdJodgadores = jogadores.QuantidadeJogadoresPorDificuldade(dificuldade);    
            if (jogador == null)
            {
                return NotFound();
            }

            return Ok(new {
                 qtd = qtdJodgadores,
                 registros = jogador
            });
        }
    }
}