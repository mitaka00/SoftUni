using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = int.Parse(Console.ReadLine());
            var num2 = int.Parse(Console.ReadLine());
            var maxSum = int.Parse(Console.ReadLine());
            var count = 0;
            var sum = 0;
            for (int i = num1; i >= 1; i--)
            {
                for (int y = 1; y <= num2; y++)
                {
                    if (sum >= maxSum)
                        break;
                    sum =sum+ (i * y )* 3;
                    count++;
                  
                }
            }
            if (sum < maxSum)
            {
                Console.WriteLine($"{count} combinations");
                Console.WriteLine($"Sum: {sum}");
            }
            else
            {
                Console.WriteLine($"{count} combinations");
                Console.WriteLine($"Sum: {sum} >= {maxSum}");
            }
        }
    }
}
