using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Forca.Test.Mock;
using System.Collections.Generic;
using Forca.Dominio;

namespace Forca.Test
{
    [TestClass]
    public class RepositorioPalavrasTest
    {
        [TestMethod]
        public void ListarTresPalavras()
        {
            RepositorioPalavraMock repositorio = new RepositorioPalavraMock();
            var lista = repositorio.ListarPalavras();
            
            Assert.AreEqual(3, ); 

        }
    }
}
