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
                  new Palavra { Composicao = "atividade", Dica = "come�a com a" },
                  new Palavra { Composicao = "atitude", Dica = "come�a com a" },
                  new Palavra { Composicao = "regra", Dica = "come�a com r" },
                  new Palavra { Composicao = "diferente", Dica = "n�o � igual" },
                  new Palavra { Composicao = "setor", Dica = "come�a com s" },
                  new Palavra { Composicao = "estabelecimento", Dica = "come�a com e" },
                  new Palavra { Composicao = "relacionamento", Dica = "namoro, v�nculo" },
                  new Palavra { Composicao = "vertical", Dica = "n�o � horizontal" },
                  new Palavra { Composicao = "hierarquia", Dica = "come�a com h" },
                  new Palavra { Composicao = "tudo", Dica = "nada" },
                  new Palavra { Composicao = "fundamental", Dica = "come�a com f" },
                  new Palavra { Composicao = "dificuldade", Dica = "javascript" },
                  new Palavra { Composicao = "grupo", Dica = "come�a com g" },
                  new Palavra { Composicao = "retorno", Dica = "come�a com r" },
                  new Palavra { Composicao = "longo", Dica = "come�a com l" },
                  new Palavra { Composicao = "prazo", Dica = "come�a com p" },
                  new Palavra { Composicao = "diretriz", Dica = "come�a com d" },
                  new Palavra { Composicao = "objetivo", Dica = "meta" },
                  new Palavra { Composicao = "desenvolvimento", Dica = "come�a com d" },
                  new Palavra { Composicao = "futuro", Dica = "passado" },
                  new Palavra { Composicao = "incentivo", Dica = "est�mulo" },
                  new Palavra { Composicao = "mercado", Dica = "come�a com m" },
                  new Palavra { Composicao = "mundial", Dica = "come�a com m" },
                  new Palavra { Composicao = "postura", Dica = "come�a com p" },
                  new Palavra { Composicao = "dirigente", Dica = "come�a com d" },
                  new Palavra { Composicao = "complexidade", Dica = "come�a com c" },
                  new Palavra { Composicao = "capacidade", Dica = "come�a com c" },
                  new Palavra { Composicao = "forma", Dica = "come�a com f" },
                  new Palavra { Composicao = "prazo", Dica = "come�a com p" },
                  new Palavra { Composicao = "abertura", Dica = "come�a com a" },
                  new Palavra { Composicao = "resultado", Dica = "come�a com r" },
                  new Palavra { Composicao = "hegemonia", Dica = "come�a com h" },
                  new Palavra { Composicao = "ambiente", Dica = "come�a com a" },
                  new Palavra { Composicao = "departamento", Dica = "come�a com d" },
                  new Palavra { Composicao = "crescente", Dica = "come�a com c" },
                  new Palavra { Composicao = "alcance", Dica = "come�a com a" },
                  new Palavra { Composicao = "inovador", Dica = "come�a com i" },
                  new Palavra { Composicao = "constante", Dica = "come�a com c" },
                  new Palavra { Composicao = "convencional", Dica = "come�a com c" },
                  new Palavra { Composicao = "competitividade", Dica = "come�a com c" },
                  new Palavra { Composicao = "comercial", Dica = "come�a com c" },
                  new Palavra { Composicao = "valor", Dica = "come�a com v" },
                  new Palavra { Composicao = "ortodoxo", Dica = "come�a com o" },
                  new Palavra { Composicao = "empenho", Dica = "come�a com e" },
                  new Palavra { Composicao = "julgamento", Dica = "come�a com j" },
                  new Palavra { Composicao = "imparcial", Dica = "come�a com i" },
                  new Palavra { Composicao = "costume", Dica = "come�a com c" },
                  new Palavra { Composicao = "papel", Dica = "come�a com p" },
                  new Palavra { Composicao = "promise", Dica = "ningu�m entende" },
                  new Palavra { Composicao = "conhecimento", Dica = "come�a com c" },
                  new Palavra { Composicao = "prova", Dica = "come�a com p" },
                  new Palavra { Composicao = "acompanhamento", Dica = "come�a com a" },
                  new Palavra { Composicao = "consumo", Dica = "come�a com c" },
                  new Palavra { Composicao = "correto", Dica = "come�a com c" },
                  new Palavra { Composicao = "fluxo", Dica = "come�a com f" },
                  new Palavra { Composicao = "metodologia", Dica = "come�a com m" },
                  new Palavra { Composicao = "equipe", Dica = "come�a com e" },
                  new Palavra { Composicao = "distinto", Dica = "come�a com d" },
                  new Palavra { Composicao = "corrente", Dica = "come�a com c" },
                  new Palavra { Composicao = "pensamento", Dica = "come�a com p" },
                  new Palavra { Composicao = "significado", Dica = "come�a com s" },
                  new Palavra { Composicao = "problema", Dica = "come�a com p" },
                  new Palavra { Composicao = "atividade", Dica = "come�a com a" },
                  new Palavra { Composicao = "interessante", Dica = "come�a com i" },
                  new Palavra { Composicao = "quadro", Dica = "come�a com q" },
                  new Palavra { Composicao = "relatividade", Dica = "come�a com r" },
                  new Palavra { Composicao = "fim de semana", Dica = "come�a com f" },
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
                  new Palavra { Composicao = "alto falante", Dica = "galalau que n�o para de falar" },
                  new Palavra { Composicao = "afro americano", Dica = "dois continentes" },
                  new Palavra { Composicao = "ama de leite", Dica = "coisa antiga" },
                  new Palavra { Composicao = "asa delta", Dica = "coxa alfa" },
                  new Palavra { Composicao = "banho maria", Dica = "maria sai do banho" },
                  new Palavra { Composicao = "guarda costas", Dica = "i got ur back" },
                  new Palavra { Composicao = "porquinho da india", Dica = "little pig from india" },
                  new Palavra { Composicao = "quero quero", Dica = "guardi�es da coruja" },
                  new Palavra { Composicao = "salva vidas", Dica = "David Hasselhoff" },
                  new Palavra { Composicao = "maria mole", Dica = "doce ruim" },
                  new Palavra { Composicao = "tatu bola", Dica = "tira do nariz e faz uma bolinha" },
                  new Palavra { Composicao = "montanha russa", Dica = "montes urais" });
        }
    }
}
