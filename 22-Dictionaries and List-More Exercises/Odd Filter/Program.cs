using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Odd_Filter
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split().Select(int.Parse).ToList();
            var evenNumbers = new List<int>();

            numbers.RemoveAll(x => x % 2 != 0);
            var average = numbers.Average();

            for (int i = 0; i < numbers.Count; i++)
            {
                if(numbers[i]<=average)
                {
                    numbers[i]--;
                }
                else
                {
                    numbers[i]++;
                }
            }
            Console.WriteLine(string.Join(" ",numbers));
        }
    }
}

