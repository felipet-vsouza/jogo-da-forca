using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Forca.Dominio.Servico;

namespace Forca.Test
{
    [TestClass]
    public class ServicoPalavraTest
    {
        [TestMethod]
        public void DeveEsconderPalavraSimples()
        {
            string palavra = "banana";

            ServicoPalavra servico = new ServicoPalavra();
            string palavraEscondida = servico.EsconderPalavra(palavra);

            Assert.AreEqual("------", palavraEscondida);
        }

        [TestMethod]
        public void DeveEsconderPalavraComposta()
        {
            string palavra = "banana caturra";

            ServicoPalavra servico = new ServicoPalavra();
            string palavraEscondida = servico.EsconderPalavra(palavra);

            Assert.AreEqual("------ -------", palavraEscondida);
        }

    }
}
