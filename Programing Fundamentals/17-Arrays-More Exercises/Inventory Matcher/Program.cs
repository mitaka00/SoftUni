using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inventory_Matcher
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] nameOfTheProducts = Console.ReadLine().Split(' ');
            long[] quantites = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            decimal[] prices= Console.ReadLine().Split(' ').Select(decimal.Parse).ToArray();

            string product = string.Empty;

            while(product!="done")
            {
                product = Console.ReadLine();
                PrintInfoForProduct(product, nameOfTheProducts, quantites, prices);

            }
           
        }

        static void PrintInfoForProduct(string product, string[] nameOfTheProducts, long[] quantites, decimal[] prices)
        {
            for (int i = 0; i < nameOfTheProducts.Length; i++)
            {
                if(nameOfTheProducts[i]==product)
                {
                    Console.WriteLine($"{product} costs: {prices[i]}; Available quantity: {quantites[i]}");
                }
            }
        }
    }
}
