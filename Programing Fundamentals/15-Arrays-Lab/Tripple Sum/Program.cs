using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tripple_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            long[] arr = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            var count = 0;

            for (long i = 0; i < arr.Length; i++)
            {
                for (long y = i+1; y < arr.Length; y++)
                {
                    for (long z = 0; z < arr.Length; z++)
                    {
                        if (arr[i] + arr[y] == arr[z])
                        {
                            Console.WriteLine($"{arr[i]} + {arr[y]} == {arr[z]}");
                            count++;
                            break;
                        }
                    }
                }
            }
            if(count==0)
            {
                Console.WriteLine("No");
            }
        }
    }
}
