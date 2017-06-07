using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace English_Name_of_Last_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = long.Parse(Console.ReadLine());
            PrintNameOfTheLastDigit(num);
        }

        static void PrintNameOfTheLastDigit(long num)
        {
            var lastDigit = Math.Abs(num % 10);
           switch(lastDigit)
            {
                case 1:
                    Console.WriteLine("one");
                    break;
                case 2:
                    Console.WriteLine("two");
                    break;
                case 3:
                    Console.WriteLine("three");
                    break;
                case 4:
                    Console.WriteLine("four");
                    break;
                case 5:
                    Console.WriteLine("five");
                    break;
                case 6:
                    Console.WriteLine("six");
                    break;
                case 7:
                    Console.WriteLine("seven");
                    break;
                case 8:
                    Console.WriteLine("eight");
                    break;
                case 9:
                    Console.WriteLine("nine");
                    break;
                case 0:
                    Console.WriteLine("zero");
                    break;
            }
        }
    }
}
