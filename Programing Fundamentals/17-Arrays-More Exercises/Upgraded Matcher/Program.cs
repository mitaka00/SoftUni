using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Upgraded_Matcher
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] ingredients = Console.ReadLine().Split(' ').ToArray();
            long[] quantities = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            decimal[] prices = Console.ReadLine().Split(' ').Select(decimal.Parse).ToArray();
            while (true)
            {
                string[] input = Console.ReadLine().Split(' ').ToArray();
                if (input[0] == "done")
                {
                    break;
                }
                for (int i = 0; i < ingredients.Length; i++)
                {
                    if (input[0] == ingredients[i])
                    {
                        FindQantitesAndPrint(input, ingredients, quantities, prices, i);
                    }
                }
            }
        }

        static void FindQantitesAndPrint(string[] input, string[] ingredients, long[] quantities, decimal[] prices, int index)
        {

            if (index >= quantities.Length)
            {
                Console.WriteLine($"We do not have enough {ingredients[index]}");
            }
            else
            {
                quantities[index] -= Convert.ToInt64(input[1]);
                if (quantities[index] < 0)
                {
                    Console.WriteLine($"We do not have enough {ingredients[index]}");
                    quantities[index] += Convert.ToInt64(input[1]); 
                }
                else
                {
                    decimal price = (Convert.ToInt64(input[1]) * prices[index]);
                    Console.WriteLine($"{ingredients[index]} x {Convert.ToInt64(input[1])} costs {price:F2}");
                }
            }
        }
    }
}  

