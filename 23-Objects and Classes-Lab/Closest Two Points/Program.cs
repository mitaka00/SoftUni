using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Closest_Two_Points
{
    class Point
    {
        public int x { get; set; }
        public int y { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var Points = new List<Point>();
            var shortestDistance = double.MaxValue;
            Point firstPointMin = null;
            Point secondPointMin = null;

            for (int i = 0; i < n; i++)
            {
                var currentPointParts = Console.ReadLine().Split().Select(int.Parse).ToArray();

                var currentPoint = new Point()
                {
                    x = currentPointParts[0],
                    y = currentPointParts[1]
                };

                Points.Add(currentPoint);
            }

            for (int i = 0; i < Points.Count-1; i++)
            {
                for (int j = i+1; j < Points.Count; j++)
                {
                    var distance = DistanceBetweenPoints(Points[i],Points[j]);

                    if(distance<shortestDistance)
                    {
                        shortestDistance = distance;
                        firstPointMin = Points[i];
                        secondPointMin = Points[j];
                    }
                }
            }

            Console.WriteLine($"{shortestDistance:f3}");
            Console.WriteLine($"({firstPointMin.x}, {firstPointMin.y})");
            Console.WriteLine($"({secondPointMin.x}, {secondPointMin.y})");
        }

        static double DistanceBetweenPoints(Point first, Point second)
        {
            return Math.Sqrt(Math.Pow(first.x - second.x, 2) + Math.Pow(first.y - second.y, 2));
        }
    }
}
