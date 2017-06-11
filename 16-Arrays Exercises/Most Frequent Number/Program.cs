using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Most_Frequent_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int count = 1;
            int currentIndex = 0;
            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] == numbers[currentIndex])
                    count++;
                else
                    count--;
                if (count == 0)
                {
                    currentIndex = i;
                    count = 1;
                }
            }

            int mostFreq = numbers[currentIndex];
            Console.WriteLine(numbers[currentIndex]);
        }
    }
}
