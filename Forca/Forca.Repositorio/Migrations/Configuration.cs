namespace Forca.Repositorio.Migrations
{
    using Dominio;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Forca.Repositorio.ContextoDeDados.ContextoBaseDeDados>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Forca.Repositorio.ContextoDeDados.ContextoBaseDeDados context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Palavra.AddOrUpdate(
                  p => p.Composicao,
                  new Palavra { Composicao = "atividade", Dica = "começa com a" },
                  new Palavra { Composicao = "atitude", Dica = "começa com a" },
                  new Palavra { Composicao = "regra", Dica = "começa com r" },
                  new Palavra { Composicao = "diferente", Dica = "não é igual" },
                  new Palavra { Composicao = "setor", Dica = "começa com s" },
                  new Palavra { Composicao = "estabelecimento", Dica = "começa com e" },
                  new Palavra { Composicao = "relacionamento", Dica = "namoro, vínculo" },
                  new Palavra { Composicao = "vertical", Dica = "não é horizontal" },
                  new Palavra { Composicao = "hierarquia", Dica = "começa com h" },
                  new Palavra { Composicao = "tudo", Dica = "nada" },
                  new Palavra { Composicao = "fundamental", Dica = "começa com f" },
                  new Palavra { Composicao = "dificuldade", Dica = "javascript" },
                  new Palavra { Composicao = "grupo", Dica = "começa com g" },
                  new Palavra { Composicao = "retorno", Dica = "começa com r" },
                  new Palavra { Composicao = "longo", Dica = "começa com l" },
                  new Palavra { Composicao = "prazo", Dica = "começa com p" },
                  new Palavra { Composicao = "diretriz", Dica = "começa com d" },
                  new Palavra { Composicao = "objetivo", Dica = "meta" },
                  new Palavra { Composicao = "desenvolvimento", Dica = "começa com d" },
                  new Palavra { Composicao = "futuro", Dica = "passado" },
                  new Palavra { Composicao = "incentivo", Dica = "estímulo" },
                  new Palavra { Composicao = "mercado", Dica = "começa com m" },
                  new Palavra { Composicao = "mundial", Dica = "começa com m" },
                  new Palavra { Composicao = "postura", Dica = "começa com p" },
                  new Palavra { Composicao = "dirigente", Dica = "começa com d" },
                  new Palavra { Composicao = "complexidade", Dica = "começa com c" },
                  new Palavra { Composicao = "capacidade", Dica = "começa com c" },
                  new Palavra { Composicao = "forma", Dica = "começa com f" },
                  new Palavra { Composicao = "prazo", Dica = "começa com p" },
                  new Palavra { Composicao = "abertura", Dica = "começa com a" },
                  new Palavra { Composicao = "resultado", Dica = "começa com r" },
                  new Palavra { Composicao = "hegemonia", Dica = "começa com h" },
                  new Palavra { Composicao = "ambiente", Dica = "começa com a" },
                  new Palavra { Composicao = "departamento", Dica = "começa com d" },
                  new Palavra { Composicao = "crescente", Dica = "começa com c" },
                  new Palavra { Composicao = "alcance", Dica = "começa com a" },
                  new Palavra { Composicao = "inovador", Dica = "começa com i" },
                  new Palavra { Composicao = "constante", Dica = "começa com c" },
                  new Palavra { Composicao = "convencional", Dica = "começa com c" },
                  new Palavra { Composicao = "competitividade", Dica = "começa com c" },
                  new Palavra { Composicao = "comercial", Dica = "começa com c" },
                  new Palavra { Composicao = "valor", Dica = "começa com v" },
                  new Palavra { Composicao = "ortodoxo", Dica = "começa com o" },
                  new Palavra { Composicao = "empenho", Dica = "começa com e" },
                  new Palavra { Composicao = "julgamento", Dica = "começa com j" },
                  new Palavra { Composicao = "imparcial", Dica = "começa com i" },
                  new Palavra { Composicao = "costume", Dica = "começa com c" },
                  new Palavra { Composicao = "papel", Dica = "começa com p" },
                  new Palavra { Composicao = "promise", Dica = "ninguém entende" },
                  new Palavra { Composicao = "conhecimento", Dica = "começa com c" },
                  new Palavra { Composicao = "prova", Dica = "começa com p" },
                  new Palavra { Composicao = "acompanhamento", Dica = "começa com a" },
                  new Palavra { Composicao = "consumo", Dica = "começa com c" },
                  new Palavra { Composicao = "correto", Dica = "começa com c" },
                  new Palavra { Composicao = "fluxo", Dica = "começa com f" },
                  new Palavra { Composicao = "metodologia", Dica = "começa com m" },
                  new Palavra { Composicao = "equipe", Dica = "começa com e" },
                  new Palavra { Composicao = "distinto", Dica = "começa com d" },
                  new Palavra { Composicao = "corrente", Dica = "começa com c" },
                  new Palavra { Composicao = "pensamento", Dica = "começa com p" },
                  new Palavra { Composicao = "significado", Dica = "começa com s" },
                  new Palavra { Composicao = "problema", Dica = "começa com p" },
                  new Palavra { Composicao = "atividade", Dica = "começa com a" },
                  new Palavra { Composicao = "interessante", Dica = "começa com i" },
                  new Palavra { Composicao = "quadro", Dica = "começa com q" },
                  new Palavra { Composicao = "relatividade", Dica = "começa com r" },
                  new Palavra { Composicao = "fim de semana", Dica = "começa com f" },
                  new Palavra { Composicao = "beija flor", Dica = "passarinho" },
                  new Palavra { Composicao = "criado mudo", Dica = "criado sem voz" },
                  new Palavra { Composicao = "estrela do mar", Dica = "patrick" },
                  new Palavra { Composicao = "dente de leite", Dica = "dente que pode virar queijo" },
                  new Palavra { Composicao = "dedo duro", Dica = "inverno sem luvas" },
                  new Palavra { Composicao = "boto cor de rosa", Dica = "golfinho wannabe" },
                  new Palavra { Composicao = "sangue frio", Dica = "bernardo com trabalho de js" },
                  new Palavra { Composicao = "longa metragem", Dica = "filme" },
                  new Palavra { Composicao = "puro sangue", Dica = "cavalo" },
                  new Palavra { Composicao = "mata moscas", Dica = "anos 90" },
                  new Palavra { Composicao = "louva a deus", Dica = "kung fu" },
                  new Palavra { Composicao = "maria vai com as outras", Dica = "maria algo" },
                  new Palavra { Composicao = "guarda chuva", Dica = "agua guardada" },
                  new Palavra { Composicao = "alto falante", Dica = "galalau que não para de falar" },
                  new Palavra { Composicao = "afro americano", Dica = "dois continentes" },
                  new Palavra { Composicao = "ama de leite", Dica = "coisa antiga" },
                  new Palavra { Composicao = "asa delta", Dica = "coxa alfa" },
                  new Palavra { Composicao = "banho maria", Dica = "maria sai do banho" },
                  new Palavra { Composicao = "guarda costas", Dica = "i got ur back" },
                  new Palavra { Composicao = "porquinho da india", Dica = "little pig from india" },
                  new Palavra { Composicao = "quero quero", Dica = "guardiões da coruja" },
                  new Palavra { Composicao = "salva vidas", Dica = "David Hasselhoff" },
                  new Palavra { Composicao = "maria mole", Dica = "doce ruim" },
                  new Palavra { Composicao = "tatu bola", Dica = "tira do nariz e faz uma bolinha" },
                  new Palavra { Composicao = "montanha russa", Dica = "montes urais" });
        }
    }
}
