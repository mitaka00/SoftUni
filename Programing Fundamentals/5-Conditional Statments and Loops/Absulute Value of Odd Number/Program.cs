using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Absulute_Value_of_Odd_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            for (int i = 0; i < 10; i++)
            {
                number = int.Parse(Console.ReadLine());
                if (number % 2 == 0) 
                {
                    Console.WriteLine("Please write an odd number.");
                }
                else
                {
                    Console.WriteLine($"The number is: {Math.Abs(number)}");
                    return;
                }
            }
        }
    }
}
