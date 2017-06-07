using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Primes_in_Given_Range
{
    class Program
    {
        static void Main(string[] args)
        {
            var startNum = int.Parse(Console.ReadLine());
            var endNum = int.Parse(Console.ReadLine());

            FindPrimesInRange(startNum, endNum);
        }

        static void FindPrimesInRange(int startNum, int endNum)
        {
            if(startNum<2)
            {
                startNum = 2;
            }
            bool firstPrime = true;

            for (int num = startNum; num <=endNum; num++)
            {
                bool prime = true;
                for (int divisor = 2; divisor <= Math.Sqrt(num); divisor++)
                {
                    if(num%divisor==0)
                    {
                        prime=false;
                        break;
                    }
                }
                if (prime == true && firstPrime==true)
                {
                    Console.Write(num);
                    firstPrime = false;
                }
                else if(prime)
                {
                    Console.Write(", ");
                    Console.Write(num);
                }
            }
            Console.WriteLine();
        }
    }
}
