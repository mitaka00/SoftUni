using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Balanced_Brackets
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            string symbol;
            var openingBrackets = 0;
            var closingBrackets = 0;
            for (int i = 0; i < n; i++)
            {
                symbol = Console.ReadLine();

                if(symbol=="(")
                {
                    openingBrackets++;
                }

                if(symbol==")" && openingBrackets==closingBrackets)
                {
                    Console.WriteLine("UNBALANCED");
                    return;
                }
                if(symbol==")")
                {
                    closingBrackets++;
                }
            }
            if(openingBrackets==closingBrackets)
            {
                Console.WriteLine("BALANCED");
            }
            else
            {
                Console.WriteLine("UNBALANCED");
            }
        }
    }
}
