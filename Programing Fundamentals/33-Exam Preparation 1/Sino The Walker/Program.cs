using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;
using System.Globalization;

namespace Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            var start = Console.ReadLine().Split(':').Select(int.Parse).ToArray();

            var hoursToSeconds = start[0] * 3600;
            var minutesToSeconds = start[1] * 60;

            var allSecondsFromStart = (BigInteger)(hoursToSeconds + minutesToSeconds + start[2]);

            var steps = BigInteger.Parse(Console.ReadLine());
            var timeForStep = BigInteger.Parse(Console.ReadLine());

            BigInteger timeForSteps = steps * timeForStep;

            BigInteger allSeconds = allSecondsFromStart + timeForSteps;

            var finalHour = allSeconds / 3600 %24;
            var finalMinutes = allSeconds / 60 %60;
            var finalSeconds = allSeconds%60;

            Console.WriteLine($"Time Arrival: {finalHour:00}:{finalMinutes:00}:{finalSeconds:00}");
        }
    }
}
