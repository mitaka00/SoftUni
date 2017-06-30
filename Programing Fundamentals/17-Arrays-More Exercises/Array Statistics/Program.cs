using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Array_Statistics
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            FindMinNumber(numbers);
            FindMaxNumber(numbers);
            FindSumOfTheNumbers(numbers);
            FindAverage(numbers);
        }

        static void FindAverage(int[] numbers)
        {
            var sum = 0.0;

            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
            }

            Console.WriteLine($"Average = {sum/numbers.Length}");
        }

        static void FindSumOfTheNumbers(int[] numbers)
        {
            var sum = 0;

            for (int i = 0; i < numbers.Length; i++)
            {
                sum += numbers[i];
            }

            Console.WriteLine($"Sum = {sum}");
        }

        static void FindMaxNumber(int[] numbers)
        {
            var max = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {
                if (max < numbers[i])
                {
                    max = numbers[i];
                }
            }

            Console.WriteLine($"Max = {max}");
        }

        static void FindMinNumber(int[] numbers)
        {
            var min = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {
                if(min>numbers[i])
                {
                    min = numbers[i];
                }
            }

            Console.WriteLine($"Min = {min}");
        }
    }
}
