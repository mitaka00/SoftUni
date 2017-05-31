using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Photo_Gallery
{
    class Program
    {
        static void Main(string[] args)
        {
            var photoNumber = int.Parse(Console.ReadLine());
            var day = int.Parse(Console.ReadLine());
            var month = int.Parse(Console.ReadLine());
            var year = int.Parse(Console.ReadLine());
            var hours = int.Parse(Console.ReadLine());
            var minutes = int.Parse(Console.ReadLine());
            var size = int.Parse(Console.ReadLine());
            var rWidth = int.Parse(Console.ReadLine());
            var rHeight = int.Parse(Console.ReadLine());
            var resolution = string.Empty;
            Console.WriteLine($"Name: DSC_{photoNumber:d4}.jpg");
            Console.WriteLine($"Date Taken: {day:d2}/{month:d2}/{year:d4} {hours:d2}:{minutes:d2}");
            if (size < 1000)
            {
                Console.WriteLine("Size: {0}B", size);
            }
            else if (size < 1000000)
            {
                size /= 1000;
                Console.WriteLine("Size: {0}KB", size);
            }
            else
            {
                size /= 1000000;
                Console.WriteLine("Size: {0}MB", size);
            }

            if(rWidth>rHeight)
            {
                resolution = "landscape";
            }
            if(rWidth<rHeight)
            {
                resolution = "portrait";
            }
            if(rWidth==rHeight)
            {
                resolution = "square";
            }
            Console.WriteLine($"Resolution: {rWidth}x{rHeight} ({resolution})");
        }
    }
}
