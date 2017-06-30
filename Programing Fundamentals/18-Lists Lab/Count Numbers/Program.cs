using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            numbers.Sort();
            var count = 1;

            for (int i = 0; i < numbers.Count; i++)
            {
                if(i==numbers.Count-1)
                {
                    Console.WriteLine($"{numbers[i]} -> {count}");
                    return;
                }
                if(numbers[i]==numbers[i+1])
                {
                    count++;
                }
                else
                {
                    Console.WriteLine($"{numbers[i]} -> {count}");
                    count = 1;
                }
            }
        }
    }
}
