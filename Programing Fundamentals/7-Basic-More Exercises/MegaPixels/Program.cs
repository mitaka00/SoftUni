using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MegaPixels
{
    class Program
    {
        static void Main(string[] args)
        {
            var width = double.Parse(Console.ReadLine());
            var heigth = double.Parse(Console.ReadLine());
            Console.WriteLine($"{width}x{heigth} => {Math.Round(width*heigth/1000000,1)}MP");
        }
    }
}
