using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Distance_Between_Points
{
    class Point
    {
        public double x { get; set; }
        public double y { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var firstPoint = Console.ReadLine().Split();
            var secondPoint = Console.ReadLine().Split();

            var first = new Point
            {
                x = double.Parse(firstPoint[0]),
                y = double.Parse(firstPoint[1])
            };

            var second = new Point
            {
                x = double.Parse(secondPoint[0]),
                y = double.Parse(secondPoint[1])
            };

            var result = DistanceBetweenPoints(first, second);
            Console.WriteLine($"{result:f3}");
        }

        static double DistanceBetweenPoints(Point first, Point second)
        {
            return Math.Sqrt(Math.Pow(first.x - second.x,2) + Math.Pow(first.y - second.y,2));
        }
    }
}
