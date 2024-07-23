using Microsoft.AspNetCore.Mvc;
using SummerTraining.Handlers.Products;

namespace SummerTraining.Controllers.ProductController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductHandler _productHandler;

        public ProductController(IProductHandler productHandler)
        {
            _productHandler = productHandler ?? throw new ArgumentNullException(nameof(productHandler));
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _productHandler.GetProductById(id);
            return Ok(product);
        }
    }
}
