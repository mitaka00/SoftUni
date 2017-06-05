using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WaterOverFlow
{
    class Program
    {
        static void Main(string[] args)
        {
            var numberOFLine = int.Parse(Console.ReadLine());
            var quantity = 0;
            var capacity = 0;
            for (int i = 0; i < numberOFLine; i++)
            {
                quantity = int.Parse(Console.ReadLine());
                if (capacity + quantity <= 255)
                {
                    capacity += quantity;
                }
                else
                {
                    Console.WriteLine("Insufficient capacity!");
                }
            }
            Console.WriteLine(capacity);
        }
    }
}
