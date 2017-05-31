using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cake_Ingridients
{
    class Program
    {
        static void Main(string[] args)
        {
            var ingredients = string.Empty;
            var count = 0;
            for (int i = 0; i < 20; i++)
            {
                ingredients = Console.ReadLine();
               
                if (ingredients == "Bake!")
                    break;
                count++;
                Console.WriteLine("Adding ingredient {0}.",ingredients);
              
            }
            Console.WriteLine("Preparing cake with {0} ingredients.",count);
        }
    }
}
