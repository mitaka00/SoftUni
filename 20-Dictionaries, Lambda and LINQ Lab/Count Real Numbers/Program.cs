using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_Real_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split().Select(double.Parse).ToList();

            var countNumbers = new SortedDictionary<double,int>();

            foreach(var num in numbers)
            {
                if(countNumbers.ContainsKey(num))
                {
                    countNumbers[num]++;
                }
                else
                {
                    countNumbers[num] = 1;
                }
            }

            foreach (var num in countNumbers)
            {
                Console.WriteLine($"{num.Key} -> {num.Value}");
            }
        }
    }
}
