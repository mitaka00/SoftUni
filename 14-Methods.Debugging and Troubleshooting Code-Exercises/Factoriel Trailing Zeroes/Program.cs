using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace Factoriel_Trailing_Zeroes
{
    class Program
    {
        static void Main(string[] args)
        {

            var n = int.Parse(Console.ReadLine());

           FindTrailingZeroes(Factoriel(n));
        }

        static void FindTrailingZeroes(BigInteger num)
        {
            var count = 0;
            while(num%10==0)
            {
                count++;
                num /= 10;
            }
            Console.WriteLine(count);
        }

        static BigInteger Factoriel(int n)
        {
            BigInteger factoriel = 1;
            for (int i = 1; i <= n; i++)
            {
                factoriel *= i;
            }
            return factoriel;
        }
    }
  }

