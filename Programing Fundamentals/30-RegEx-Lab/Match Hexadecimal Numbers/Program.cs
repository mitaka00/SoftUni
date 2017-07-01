using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Match_Hexadecimal_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            string pattern = @"\b(?:0x)?[0-9A-F]+\b";

            var inputMatches = Regex.Matches(input, pattern).Cast<Match>().Select(n=>n.Value).ToArray();

            Console.WriteLine(string.Join(" ",inputMatches));
        }
    }
}
