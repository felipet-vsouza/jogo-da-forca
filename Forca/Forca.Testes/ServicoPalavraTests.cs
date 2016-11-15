using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Forca.Dominio.Repositorios;
using Forca.Dominio;
using Forca.Web.Services;
using Forca.Dominio.Servico;
using System.Collections.Generic;

namespace Forca.Testes
{
    [TestClass]
    public class ServicoPalavraTests
    {
        [TestMethod]
        public void DeveSortearPalavra()
        {
            var palavra = new Palavra();
            palavra.Id = 1;
            palavra.Composicao = "composicao";
            palavra.Dica = "dica";

            Mock<IRepositorioPalavra> mockPalavraRepositorio = new Mock<IRepositorioPalavra>();
            mockPalavraRepositorio.Setup(pr => pr.BuscarTodas()).Returns(new List<Palavra> { palavra });

            var servico = new ServicoPalavra(mockPalavraRepositorio.Object);

            var sorteada = servico.SortearPalavra();

            Assert.AreEqual(palavra, sorteada);
        }

        [TestMethod]
        public void DeveContarPalavras()
        {
            Mock<IRepositorioPalavra> mockPalavraRepositorio = new Mock<IRepositorioPalavra>();
            mockPalavraRepositorio.Setup(pr => pr.ContadorDePalavras()).Returns(5);

            var servico = new ServicoPalavra(mockPalavraRepositorio.Object);

            var quantidade = servico.GetQuantidade();

            Assert.AreEqual(5, quantidade);
        }
    }
}
