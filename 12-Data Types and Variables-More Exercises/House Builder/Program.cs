using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace House_Builder
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = long.Parse(Console.ReadLine());
            var num2 = long.Parse(Console.ReadLine());
            if(num1<=sbyte.MaxValue)
            {
                Console.WriteLine(10*num2+4*num1);
            }
            else
            {
                Console.WriteLine(10*num1+4*num2);
            }
        }
    }
}
