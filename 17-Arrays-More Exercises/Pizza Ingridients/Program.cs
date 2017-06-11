using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pizza_Ingridients
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] ingridients = Console.ReadLine().Split(' ').ToArray();
            var length = int.Parse(Console.ReadLine());
            var countIngr = 0;
            string[] pizzaIngridient = new string[ingridients.Length];

            for (int i = 0; i < ingridients.Length; i++)
            {

                if (ingridients[i].Length == length)
                {
                    Console.WriteLine($"Adding {ingridients[i]}.");
                    pizzaIngridient[countIngr] = ingridients[i];
                    countIngr++;
                    if(countIngr==10)
                    {
                        break;
                    }
                }
            }

            Console.WriteLine("Made pizza with total of {0} ingredients.", countIngr);
            Console.Write($"The ingredients are: ");

            for (int i = 0; i < countIngr; i++)
            {
                if (i < countIngr - 1)
                {
                    Console.Write($"{pizzaIngridient[i]}, ");
                }
                else
                {
                    Console.WriteLine($"{pizzaIngridient[i]}.");
                    break;
                }
            }
        }
    }
}

