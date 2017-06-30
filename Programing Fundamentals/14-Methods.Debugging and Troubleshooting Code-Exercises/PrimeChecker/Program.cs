using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeChecker
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = long.Parse(Console.ReadLine());

            FindPrimeNumber(num);
        }

        static void FindPrimeNumber(long num)
        {
            var prime = "True";
            if(num==1)
            {
                Console.WriteLine("False");
                return;
            }

            if (num == 0)
            {
                Console.WriteLine("False");
                return;
            }
            else
            {
                for (int i = 2; i <= Math.Sqrt(num); i++)
                {
                    if (num % i == 0)
                    {
                        prime = "False";
                    }
                }
                Console.WriteLine(prime);
            }
        }
    }
}
