using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Training_Hall_Equipment
{
    class Program
    {
        static void Main(string[] args)
        {
            var budget = int.Parse(Console.ReadLine());
            var numItems = int.Parse(Console.ReadLine());
            var itemName = string.Empty;
            var itemPrice = 0.0;
            var itemCount = 0;
            var totalMoney = 0.0;
            for (int i = 0; i < numItems; i++)
            {
                itemName = Console.ReadLine();
                itemPrice =double.Parse(Console.ReadLine());
                itemCount = int.Parse(Console.ReadLine());
               
                if(itemCount>1)
                {
                    itemName = Plural(itemName);
                }
                Console.WriteLine($"Adding {itemCount} {itemName} to cart.");
                totalMoney += itemCount * itemPrice;
            }
            if(totalMoney>budget)
            {
                Console.WriteLine($"Subtotal: ${totalMoney:f2}");
                Console.WriteLine($"Not enough. We need ${totalMoney-budget:f2} more.");
            }
            else
            {
                Console.WriteLine($"Subtotal: ${totalMoney:f2}");
                Console.WriteLine($"Money left: ${budget-totalMoney:f2}");
            }
        }

        static string Plural(string word)
        {
            if (word.EndsWith("y"))
            {
                word = word.Remove(word.Length - 1);
                word += "ies";
            }
            else if (word.EndsWith("o") ||
                word.EndsWith("s") ||
                word.EndsWith("sh") ||
                word.EndsWith("z") ||
                word.EndsWith("x") ||
                word.EndsWith("ch"))
            {
                word += "es";
            }
            else
            {
                word += "s";
            }
            return(word);
        }
    }
}
