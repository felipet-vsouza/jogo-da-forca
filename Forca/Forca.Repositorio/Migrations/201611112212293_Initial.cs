namespace Forca.Repositorio.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Palavra",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Composicao = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Palavra");
        }
    }
}
