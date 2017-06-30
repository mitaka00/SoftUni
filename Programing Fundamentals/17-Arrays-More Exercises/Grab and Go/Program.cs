using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grab_and_Go
{
    class Program
    {
        static void Main(string[] args)
        {
            long[] arr = Console.ReadLine().Split(' ').Select(long.Parse).ToArray();
            var searchNum = long.Parse(Console.ReadLine());

            long sum = 0;
            var index = -1;

            for (int i = 0; i < arr.Length; i++)
            {
                if(searchNum==arr[i])
                {
                    index = i;
                }
            }

            if (index == -1)
            {
                Console.WriteLine("No occurrences were found!");
            }
            else
            {
                for (int i = 0; i < index; i++)
                {
                    sum += arr[i];
                }
                Console.WriteLine(sum);
            }
        }
    }
}
