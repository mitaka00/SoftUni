using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Convert_Speed_Units
{
    class Program
    {
        static void Main(string[] args)
        {
            var meters = float.Parse(Console.ReadLine());
            var hours = float.Parse(Console.ReadLine());
            var minutes = float.Parse(Console.ReadLine());
            var seconds = float.Parse(Console.ReadLine());
            seconds = seconds + hours * 3600 + minutes * 60;
            var metersPerSeconds = meters/seconds;
            var kilometersPerHours = (meters / 1000) / (seconds/3600);
            var milePerHour = (meters / 1609f) / (seconds / 3600);
            Console.WriteLine($"{(metersPerSeconds)}");
            Console.WriteLine($"{kilometersPerHours}");
            Console.WriteLine($"{(milePerHour)}");
        }
    }
}
