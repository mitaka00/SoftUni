using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fibonacci_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            PrintFib(n);
        }

        static void PrintFib(int n)
        {
            var num1 = 0;
            var num2 = 1;
            var num3 = 1;
            for (int i = 0; i < n; i++)
            {
                if (n == 0)
                {
                    Console.WriteLine("1");
                    return;
                }
                else
                {
                    num1 = num2;
                    num2 = num3;
                    num3 = num1 + num2;
                }
            }
            Console.WriteLine(num2);
        }
    }
}
