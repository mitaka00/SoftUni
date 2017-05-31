using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            var grade = double.Parse(Console.ReadLine());
            if(grade>=3.00)
                Console.WriteLine("Passed!");
            else
                Console.WriteLine("Failed!");
        }
    }
}
