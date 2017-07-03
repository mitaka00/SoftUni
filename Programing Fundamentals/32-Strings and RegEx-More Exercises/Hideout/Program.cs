using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Hideout
{
    class Program
    {
        static void Main(string[] args)
        {
            var map = Console.ReadLine();

          

            while(true)
            {
                var input=Console.ReadLine().Split();
                var character = input[0];
                var countOfCharacter = int.Parse(input[1]);

                var pattern = new Regex($@"\{character}{{{countOfCharacter},}}");
                // var pattern = @"\"+ character + "{" + countOfCharacter  + ",}";

                var matchedmap = pattern.Match(map);

                if(matchedmap.Success)
                {
                    Console.WriteLine($"Hideout found at index {matchedmap.Index} and it is with size {matchedmap.Length}!");
                    break;
                }
            }
        }
    }
}
