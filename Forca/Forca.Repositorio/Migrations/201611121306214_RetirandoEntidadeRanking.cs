namespace Forca.Repositorio.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RetirandoEntidadeRanking : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Ranking", "Jogador_Id", "dbo.Jogador");
            DropIndex("dbo.Ranking", new[] { "Jogador_Id" });
            AddColumn("dbo.Jogador", "Dificuldade", c => c.Int(nullable: false));
            DropTable("dbo.Ranking");
        }
        
        public override void Down()
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
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.Jogador", "Dificuldade");
            CreateIndex("dbo.Ranking", "Jogador_Id");
            AddForeignKey("dbo.Ranking", "Jogador_Id", "dbo.Jogador", "Id");
        }
    }
}
