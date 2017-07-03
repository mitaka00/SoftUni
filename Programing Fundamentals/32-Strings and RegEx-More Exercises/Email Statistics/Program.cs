using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Email_Statistics
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var emails = string.Empty;
            var regex = new Regex(@"^(?<username>[A-Za-z]{5,})@(?<domain>[a-z]{3,}[.][com|bg|org]+)$");

            var domains = new Dictionary<string, List<string>>();

            for (int i = 0; i < n; i++)
            {
                emails = Console.ReadLine();

              if(regex.IsMatch(emails))
                {
                    var matchedEmails = regex.Match(emails);

                    var username = matchedEmails.Groups["username"].ToString();
                    var domain = matchedEmails.Groups["domain"].ToString();

                    if (!domains.Keys.Contains(domain))
                    {
                        domains[domain] = new List<string>();
                    }

                    if (!domains[domain].Contains(username))
                    {
                        domains[domain].Add(username);
                    }
                }
            }

            foreach (var domain in domains.OrderByDescending(x=>x.Value.Count))
            {
                Console.WriteLine(domain.Key+":");
                foreach (var username in domain.Value)
                {
                    Console.WriteLine("### "+username);
                }
            }
        }
    }
}
