using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Match_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var pattern = @"(^|(?<=\s))-?\d+(\.\d+)?($|(?=\s))";

            var matchedNumbers = Regex.Matches(input, pattern);

            foreach (Match number in matchedNumbers)
            {
                Console.Write(number+ " ");
            }

            Console.WriteLine();
        }
    }
}
