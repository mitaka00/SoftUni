using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Beer_Kegs
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var model = string.Empty;
            var raidus = 0.0;
            var height = 0;
            var volume = 0.0;
            var biggestVolume = 0.0;
            var finalmodel = string.Empty;
            for (int i = 0; i < n; i++)
            {
                model = Console.ReadLine();
                raidus = double.Parse(Console.ReadLine());
                height = int.Parse(Console.ReadLine());
                volume = Math.PI * raidus * raidus * height;
                if(volume>biggestVolume)
                {
                    biggestVolume = volume;
                    finalmodel = model;
                }
            }
            Console.WriteLine(finalmodel);
        }
    }
}
