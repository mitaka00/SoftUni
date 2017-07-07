using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Rage_Quit
{
    class Program
    {
        static void Main(string[] args)
        {
            var pattern = new Regex(@"(?<message>[^0-9]+)(?<number>[0-9]+)");
            var symbols = new List<char>();
            var output = new List<string>();

            var input = Console.ReadLine();
            var matchedInput = pattern.Matches(input);

            foreach (Match text in matchedInput)
            {
                var symbol = text.Groups["message"].ToString().ToUpper() ;
                var numberrepeats = int.Parse(text.Groups["number"].ToString());

                if (numberrepeats == 0)
                {
                    continue;
                }
                else
                {
                    for (int i = 0; i < symbol.Length; i++)//find unique numbers
                    {
                        if (!symbols.Contains(symbol[i]))
                        {
                            symbols.Add(symbol[i]);
                        }
                    }

                    for (int i = 0; i < numberrepeats; i++)
                    {
                        output.Add(symbol);
                    }
                }
             }

            Console.WriteLine($"Unique symbols used: {symbols.Count}");
            Console.WriteLine(string.Join("",output));
            }
        }        
    }
