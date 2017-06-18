using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SuperMarket_Database
{
    class Program
    {
        static void Main(string[] args)
        {
            var inPut = Console.ReadLine();

            var productPriceQuantity = new Dictionary<string, Dictionary<double, int>>();
            var productQuantity = new Dictionary<string, int>();
            var subTotal = 0.0;

            while(inPut!="stocked")
           {
                var SplittedInPut=inPut.Split(' ').ToList();

                var product = SplittedInPut[0];
                var price = double.Parse(SplittedInPut[1]);
                var quantity = int.Parse(SplittedInPut[2]);

                if(!productPriceQuantity.ContainsKey(product))
                {
                    productPriceQuantity[product] = new Dictionary<double, int>();
                    productPriceQuantity[product].Add(price,quantity);

                    productQuantity[product] = quantity;
                }
                else
                {
                    quantity += productQuantity[product];
                    productQuantity[product] = quantity;

                    productPriceQuantity[product].Clear();
                    productPriceQuantity[product].Add(price, quantity);
                }

                inPut=Console.ReadLine();
           }

            foreach (var product in productPriceQuantity)
            {
                foreach (var priceQuant in product.Value)
                {
                    var sumForOneProduct = priceQuant.Key*priceQuant.Value;
                    subTotal += sumForOneProduct;

                    Console.WriteLine(
                        $"{product.Key}: ${priceQuant.Key:f2} * {priceQuant.Value} = ${sumForOneProduct:f2}");
                }
            }

            Console.WriteLine("------------------------------");
            Console.WriteLine($"Grand Total: ${subTotal:f2}");
        }
    }
}
