using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var leftFold = new int[arr.Length / 4];
            var rightFold = new int[arr.Length / 4];
            var sum = new int[arr.Length / 2];

            for (int i = 0; i < arr.Length / 4; i++)
            {
                leftFold[i] = arr[arr.Length/4-1-i];
                rightFold[i] = arr[arr.Length - 1 - i];
            }

            for (int i = 0; i < arr.Length/4; i++)
            {
                sum[i] = leftFold[i] + arr[arr.Length / 4  +i];
                sum[arr.Length / 4 + i] = rightFold[i] + arr[arr.Length / 2 + i];
            }
            Console.WriteLine(string.Join(" ",sum));
        }

    }
}
