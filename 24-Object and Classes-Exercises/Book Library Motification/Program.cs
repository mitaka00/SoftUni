using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace Book_Library_Motification
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var bookInfo = new Dictionary<string, DateTime>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split().ToList();

                var title = input[0];
                DateTime date =DateTime.ParseExact(input[3], "dd.MM.yyyy", CultureInfo.InvariantCulture);

                bookInfo[title] = date;

            }

            var secondinput = Console.ReadLine();
            DateTime startdate = DateTime.ParseExact(secondinput, "dd.MM.yyyy", CultureInfo.InvariantCulture);

            foreach (var date in bookInfo.OrderBy(x=>x.Value).ThenBy(x=>x.Key))
            {
                if(startdate<date.Value)
                {
                    Console.WriteLine($"{date.Key} -> {date.Value:dd.MM.yyyy}");
                }
            }
        }
    }
 }

