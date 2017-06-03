using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fast_Time_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine()); 
            for (int numbers = 2; numbers <= n; numbers++)
            {
                bool result = true;
                for (int divisor = 2; divisor <= Math.Sqrt(numbers); divisor++)
                {
                    if (numbers % divisor == 0)
                    {
                        result = false;
                        break;
                    }
                }
                Console.WriteLine($"{numbers} -> {result}");
            }
        }
    }
}
