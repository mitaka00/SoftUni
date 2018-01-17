using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;
using System.Text.RegularExpressions;
using System.Globalization;

namespace First_Problem
{
    class Program
    {
        static void Main(string[] args)
        {
            var bonjoPattern = new Regex(@"[a-zA-Z]+-[a-zA-Z]+");
            var didiPattern = new Regex(@"[^a-zA-Z-]+");

            var input = Console.ReadLine();

            while(true)
            {
                var matcheddidi = didiPattern.Match(input);
                    if(matcheddidi.Success)
                {
                    Console.WriteLine(matcheddidi.Value);
                    var index = input.IndexOf(matcheddidi.Value);
                    input=input.Remove(0, index+matcheddidi.Length);
                   
                }
                 else
                {
                    return;
                }

                var matchedBnojo = bonjoPattern.Match(input);
                if (matchedBnojo.Success)
                {
                    Console.WriteLine(matchedBnojo.Value);
                    var index = input.IndexOf(matchedBnojo.Value);
                    input = input.Remove(0, index+matchedBnojo.Length);
                    
                }
                else
                {
                    return;
                }
            }
        }
    }
}
