using SummerTraining.Models.Requests;

namespace SummerTraining.Handlers.Products
{
    public class ProductHandler : IProductHandler
    {
        public Product GetProductById(int id)
        {
            return new Product
            {
                Id = id,
                Name = $"Product {id}",
                Price = 19.99m
            };
        }
    }
}
