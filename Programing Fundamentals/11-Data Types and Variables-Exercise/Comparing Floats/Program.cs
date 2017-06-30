using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comparing_Floats
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = double.Parse(Console.ReadLine());
            var num2 = double.Parse(Console.ReadLine());
            if(Math.Abs(num1-num2)<0.000001)
            {
                Console.WriteLine("True");
            }
            else
                Console.WriteLine("False");
        }
    }
}
