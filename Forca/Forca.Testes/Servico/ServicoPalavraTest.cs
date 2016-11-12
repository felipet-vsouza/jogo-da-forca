using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Forca.Dominio;
using Forca.Dominio.Servico;

namespace Forca.Testes
{
    [TestClass]
    public class ServicoPalavraTest
    {
        [TestMethod]
        public void DeveEsconderPalavraSimples()
        {
            var palavra = new Palavra();
            palavra.Composicao = "banana";

            ServicoPalavra servico = new ServicoPalavra();
            string palavraEscondida = servico.EsconderPalavra(palavra);

            Assert.AreEqual("------", palavraEscondida);
        }

        [TestMethod]
        public void DeveEsconderPalavraComposta()
        {
            var palavra = new Palavra();
            palavra.Composicao = "banana caturra";

            ServicoPalavra servico = new ServicoPalavra();
            string palavraEscondida = servico.EsconderPalavra(palavra);

            Assert.AreEqual("------ -------", palavraEscondida);
        }
    }
}
