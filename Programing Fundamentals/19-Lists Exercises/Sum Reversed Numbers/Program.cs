using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_Reversed_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            var sum = 0;

            for (int i = 0; i < numbers.Count; i++)
            {
                int rev = 0;
                while(numbers[i]>0)
                {
                    int r = numbers[i] % 10;
                    rev = rev * 10 + r;
                    numbers[i] /= 10;
                }
                sum += rev;
            }
            Console.WriteLine(sum);
        }
    }
}
