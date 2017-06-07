using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeometryCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            var figure = Console.ReadLine();
            var area = 0.0;

            if(figure=="triangle")
            {
                var side = double.Parse(Console.ReadLine());
                var height = double.Parse(Console.ReadLine());

                area = AreaOfTriangle(side, height);

                Console.WriteLine($"{area:f2}");
            }

            else if(figure=="square")
            {
                var side = double.Parse(Console.ReadLine());

                area = AreaOfSquare(side);

                Console.WriteLine($"{area:f2}");
            }
            else if(figure=="rectangle")
            {
                var width = double.Parse(Console.ReadLine());
                var height = double.Parse(Console.ReadLine());

                area = AreaOfRectangle(width, height);

                Console.WriteLine($"{area:f2}");
            }
            else if(figure=="circle")
            {
                var radius = double.Parse(Console.ReadLine());

                area = AreaOfCircle(radius);

                Console.WriteLine($"{area:f2}");
            }
        }

        static double AreaOfCircle(double radius)
        {
            return radius * radius * Math.PI;
        }

        static double AreaOfRectangle(double width, double height)
        {
            return width * height;
        }

        static double AreaOfSquare(double side)
        {
            return side * side;
        }

        static double AreaOfTriangle(double side, double height)
        {
            return (side * height / 2);
        }
    }
}
