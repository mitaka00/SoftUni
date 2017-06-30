using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rotate_To_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var rotationsCount = int.Parse(Console.ReadLine());

            int[] sum = new int[numbers.Length];

            for (int i = 0; i < rotationsCount; i++)
            {
                RotateArray(numbers);

                for (int j = 0; j < sum.Length; j++)
                {
                    sum[j] += numbers[j];
                }
            }

            Console.WriteLine(string.Join(" ",sum));
        }

        static void RotateArray(int[] numbers)
        {
            var lastElement = numbers[numbers.Length - 1];

            for (int i = numbers.Length-1; i >0; i--)
            {
                numbers[i] = numbers[i - 1];
            }
            numbers[0] = lastElement;
        }
    }
}
