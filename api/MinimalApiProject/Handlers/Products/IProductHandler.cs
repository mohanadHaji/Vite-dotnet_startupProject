using SummerTraining.Models.Requests;

namespace SummerTraining.Handlers.Products
{
    public interface IProductHandler
    {
        Product GetProductById(int id);
    }
}
