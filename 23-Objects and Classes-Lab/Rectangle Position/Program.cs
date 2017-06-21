using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rectangle_Position
{
    class Rectangle
    {
        public int left { get; set; }
        public int top{ get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public int Bottom
        {
            get
            {
                return top + height;
            }
        }
        public int right => left + width;
    }
    class Program
    {
        static void Main(string[] args)
        {
            var firstRectangleParts = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var secondRectangleParts = Console.ReadLine().Split().Select(int.Parse).ToArray();

            var firstRectangle = new Rectangle
            {
                left = firstRectangleParts[0],
                top =firstRectangleParts[1],
                width=firstRectangleParts[2],
                height=firstRectangleParts[3]
            };

            var secondtRectangle = new Rectangle
            {
                left = secondRectangleParts[0],
                top = secondRectangleParts[1],
                width = secondRectangleParts[2],
                height = secondRectangleParts[3]
            };

            var result = IsInside(firstRectangle, secondtRectangle);

            if(result==true)
            {
                Console.WriteLine("Inside");
            }
            else
            {
                Console.WriteLine("Not inside");
            }
        }

        private static bool IsInside(Rectangle firstRectangle, Rectangle secondtRectangle)
        {
            if(firstRectangle.left>=secondtRectangle.left 
                && firstRectangle.top<=secondtRectangle.top
                && firstRectangle.width<=secondtRectangle.width
                && firstRectangle.height<=secondtRectangle.height
                && firstRectangle.Bottom<=secondtRectangle.Bottom
                && firstRectangle.right<=secondtRectangle.right)
            {
                return true;
            }
            return false;
        }
    }
}
