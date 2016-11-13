using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Forca.Dominio;
using Forca.Repositorio.ContextoDeDados;
using Forca.Dominio.Repositorios;
using Forca.Repositorio;
using Forca.Web.Services;

namespace Forca.Web.Controllers
{
    public class PalavrasController : ApiController
    {
        private IRepositorioPalavra palavras = ServicoDeDependencias.MontarPalavrasRepositorio();

        public IHttpActionResult GetPalavra()
        {
            // simulando lentidão
            //System.Threading.Thread.Sleep(1500);

            var registros = palavras.BuscarTodas();

            return Ok(new
            {
                dados = registros
            });
        }
    }
}