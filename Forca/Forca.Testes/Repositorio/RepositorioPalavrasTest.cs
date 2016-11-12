using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Forca.Testes.Repositorio.Mocks;
using Forca.Dominio;

namespace Forca.Testes.Repositorio
{
    [TestClass]
    public class RepositorioPalavrasTest
    {
        [TestMethod]
        public void DeveListarTresPalavras()
        {
            RepositorioPalavraMock repositorio = new RepositorioPalavraMock();
            var lista = repositorio.ListarPalavras();


        }
    }
}
