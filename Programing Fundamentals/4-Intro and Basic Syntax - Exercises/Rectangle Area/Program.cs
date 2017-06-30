using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rectangle_Area
{
    class Program
    {
        static void Main(string[] args)
        {
            var height = double.Parse(Console.ReadLine());
            var width = Double.Parse(Console.ReadLine());
            Console.WriteLine("{0:f2}",height*width);
        }
    }
}
