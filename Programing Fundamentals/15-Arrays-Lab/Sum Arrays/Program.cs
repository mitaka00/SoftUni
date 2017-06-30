using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr1 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int[] arr2 = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            for (int i = 0; i < Math.Max(arr1.Length,arr2.Length); i++)
            {
                if(i>arr1.Length-1)
                {
                    Console.Write(arr2[i] + arr1[i % arr1.Length] + " ");
                }

                else if(i>arr2.Length-1)
                {
                    Console.Write(arr1[i]+arr2[i%arr2.Length]+ " ");
                }

                else
                {
                    Console.Write(arr2[i]+arr1[i] + " ");
                }
            }
        }
    }
}
