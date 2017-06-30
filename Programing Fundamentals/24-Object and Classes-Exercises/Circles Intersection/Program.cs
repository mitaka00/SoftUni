using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Circles_Intersection
{
    

    public class Circle
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Radius { get; set; }
    }
   

    class Program
    {
        static void Main(string[] args)
        {
            var firtCircleParts = Console.ReadLine().Split();
            var secondCircleParts = Console.ReadLine().Split();

            Circle firstCircle = new Circle()
            {
                X = int.Parse(firtCircleParts[0]),
                Y = int.Parse(firtCircleParts[1]),
                Radius = int.Parse(firtCircleParts[2]),
            };

            Circle secondCircle = new Circle()
            {
                X = int.Parse(secondCircleParts[0]),
                Y = int.Parse(secondCircleParts[1]),
                Radius = int.Parse(secondCircleParts[2]),
            };

            Intersect(firstCircle, secondCircle);
        }

        static void Intersect(Circle firstCircle, Circle secondCircle)
        {
            var distance = Math.Sqrt(Math.Pow(firstCircle.X - secondCircle.X, 2) + Math.Pow(firstCircle.Y - secondCircle.Y, 2));

            if(distance<=firstCircle.Radius+secondCircle.Radius)
            {
                Console.WriteLine("Yes");
            }
            else
            {
                Console.WriteLine("No");
            }
        }
    }
}
