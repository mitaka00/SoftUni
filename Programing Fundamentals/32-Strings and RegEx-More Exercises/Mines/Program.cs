using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Mines
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var matches = Regex.Matches(input, @"<([^<>]+)>");

            foreach (Match match in matches)
            {
                var char1 = match.Groups[1].Value.First();
                var char2 = match.Groups[1].Value.Last();
                int power = Math.Abs(char1 - char2);

                var matchMatch = Regex.Match(input,
                    $@"([^<>]{{0,{power}}}){match}([^<>]{{0,{power}}})");

                input = Regex.Replace(input, $@"([^<>]{{0,{power}}}){match}([^<>]{{0,{power}}})"
                    , $@"{new string('_', matchMatch.Groups[1].Length
                    + matchMatch.Groups[2].Length + 4)}");
            }
            Console.WriteLine(input);
        }
    }
}
