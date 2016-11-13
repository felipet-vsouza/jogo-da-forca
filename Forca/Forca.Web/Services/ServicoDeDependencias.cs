using Forca.Dominio.Repositorios;
using Forca.Repositorio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Forca.Web.Services
{
    public class ServicoDeDependencias
    {
        public static IRepositorioPalavra MontarPalavrasRepositorio()
        {
            return new RepositorioPalavra();
        }
    }
}