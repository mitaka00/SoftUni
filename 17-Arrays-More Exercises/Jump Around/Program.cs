using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jump_Around
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            var sum = arr[0];
            var index = 0;

            while(true)
            {
                if (index + arr[index] <= arr.Length - 1)
                {
                    index = index + arr[index];
                    sum += arr[index];
                }
                else
                {
                    if(index-arr[index]>=0)
                    {
                        index -= arr[index];
                        sum += arr[index];
                    }
                    else
                    {
                        break;
                    }
                }
            }
            Console.WriteLine(sum);
        }
    }
}
