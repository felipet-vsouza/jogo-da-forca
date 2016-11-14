namespace Forca.Repositorio.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AdicionandoColunaDicaAPalavra : DbMigration
    {
        public override void Up()
        {
            this.AddColumn("dbo.Palavra", "Dica", c => c.String(nullable: false), null);
        }
        
        public override void Down()
        {
            this.DropColumn("dbo.Palavra", "Dica", null);
        }
    }
}
