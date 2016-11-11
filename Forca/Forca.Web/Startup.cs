using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Forca.Web.Startup))]

namespace Forca.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
