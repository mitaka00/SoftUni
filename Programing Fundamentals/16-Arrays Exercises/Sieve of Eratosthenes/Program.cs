using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sieve_of_Eratosthenes
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            bool[] allNumbers = new bool[n+1];
            
            for (int i = 0; i <=n; i++)
            {
                allNumbers[i] = true;
            }
            allNumbers[0] = allNumbers[1] = false;

            for (int i = 0; i <= n; i++)
            {
                if(allNumbers[i]!=true)
                {
                    continue;
                }

                if(allNumbers[i]==true)
                {
                    Console.Write(i+" ");
                }

                for (int j = 2*i; j <=n ; j+=i)
                {
                    allNumbers[j] = false;
                }
            }
            Console.WriteLine();
        }
        
    }
}
