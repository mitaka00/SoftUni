using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;
using System.Globalization;

namespace SosftUni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            decimal totalPrice = 0;
            for (int i = 0; i < n; i++)
            {
                decimal pricePerCapsule = decimal.Parse(Console.ReadLine());
                var date = DateTime.ParseExact(Console.ReadLine(), "d/M/yyyy", CultureInfo.InvariantCulture);
                var capusleCount = long.Parse(Console.ReadLine());

                decimal price = 0;
             
                if(date.Month==2)
                {
                    if(date.Year%4==0)
                    {
                        price = 29 * capusleCount * pricePerCapsule;
                    }
                    else
                    {
                        price = 28 * capusleCount * pricePerCapsule;
                    }
                }
                else if(date.Month==1 || date.Month ==3 || date.Month ==5 || date.Month ==7 
                    || date.Month ==8 || date.Month ==10 || date.Month ==12)
                {
                    price = 31 * capusleCount * pricePerCapsule;
                }
                else
                {
                    price = 30 * capusleCount * pricePerCapsule;
                }

                Console.WriteLine($"The price for the coffee is: ${price:f2}");
                totalPrice += price;
            }

            Console.WriteLine($"Total: ${totalPrice:f2}");
        }
    }
}
