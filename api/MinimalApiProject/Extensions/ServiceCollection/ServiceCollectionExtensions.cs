using SummerTraining.Handlers.Products;

namespace SummerTraining.Extensions.ServiceCollection
{
    public static class ServiceCollectionExtensions
    {
        public static void AddHandlers(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IProductHandler, ProductHandler>();
        }
    }
}
