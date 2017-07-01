using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Match_Phone_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var phoneNumbers = Console.ReadLine();

                string pattern = @"\+359(-|\s)2\1\d{3}\1\d{4}\b";

            var phoneMatches = Regex.Matches(phoneNumbers, pattern)
                .Cast<Match>().Select(x => x.Value.Trim()).ToArray();

            Console.WriteLine(string.Join(", ",phoneMatches));
        }
    }
}
