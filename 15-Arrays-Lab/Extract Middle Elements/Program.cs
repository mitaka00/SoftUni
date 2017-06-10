using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Extract_Middle_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var middle = arr.Length / 2;

            if (arr.Length == 1)
            {
                Console.WriteLine("{{ {0} }}", arr[0]);
            }
            else if (arr.Length % 2 == 0)
            {
                Console.WriteLine("{{ {0}, {1} }}", arr[middle - 1], arr[middle]);
            }
            else
            {
                Console.WriteLine("{{ {0}, {1}, {2} }}", arr[middle - 1],
                    arr[middle],
                    arr[middle + 1]);
            }
        }
    }
}
