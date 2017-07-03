using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Extract_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var pattern = new Regex(@"(?<=\s)[a-z0-9]+([.-]\w+)*@[a-z]+([.-]\w+)*(\.[a-z]+)");

            var matchedEmails = pattern.Matches(input);

            foreach (Match email in matchedEmails)
            {
                Console.WriteLine(email);
            }
        }
    }
}
