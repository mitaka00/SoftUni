using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sales_Report
{
     class Sales
     {
        public string Town { get; set; }
        public string Product { get; set; }
        public double Price { get; set; }
        public double Quantity { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var ListSales = new List<Sales>();

            for (int i = 0; i < n; i++)
            {
                var currentSaleParts = Console.ReadLine().Split();

                var currentSale = new Sales
                {
                    Town = currentSaleParts[0],
                    Product = currentSaleParts[1],
                    Price = double.Parse(currentSaleParts[2]),
                    Quantity = double.Parse(currentSaleParts[3])
                };
                ListSales.Add(currentSale);
            }
            var result = new SortedDictionary<string, double>();

            foreach (var sale in ListSales)
            {
                if(!result.ContainsKey(sale.Town))
                {
                    result[sale.Town] = 0;
                }
                    result[sale.Town] += sale.Price * sale.Quantity;
                
            }

            foreach (var kvp in result)
            {
                Console.WriteLine($"{kvp.Key} -> {kvp.Value:f2}");
            }
        }
    }
}
