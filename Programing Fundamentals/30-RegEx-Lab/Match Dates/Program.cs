using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Match_Dates
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var pattern = @"\b(\d{2})([-.\/])([A-Z][a-z]{2})\2(\d{4})\b";

            var dates = Regex.Matches(input, pattern);

            foreach (Match date in dates)
            {
                var day=date.Groups[1].Value;
                var month=date.Groups[3].Value;
                var year=date.Groups[4].Value;

                Console.WriteLine($"Day: {day}, Month: {month}, Year: {year}");
            }
        }
    }
}
