namespace Forca.Repositorio.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AdicionandoEntidadeRanking : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Ranking",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Pontos = c.Int(nullable: false),
                        Dificuldade = c.Int(nullable: false),
                        Jogador_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Jogador", t => t.Jogador_Id)
                .Index(t => t.Jogador_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Ranking", "Jogador_Id", "dbo.Jogador");
            DropIndex("dbo.Ranking", new[] { "Jogador_Id" });
            DropTable("dbo.Ranking");
        }
    }
}
