using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Endurance_Rally
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = Console.ReadLine().Split().ToList();
            var trackLayot = Console.ReadLine().Split().Select(double.Parse).ToList();
            var checkPoints = Console.ReadLine().Split().Select(int.Parse).ToList();

            var ParticipantsFuel = new Dictionary<string, double>();

            foreach (var name in names)
            {
                double fuel = name[0];

                for (int i = 0; i < trackLayot.Count; i++)
                {
                    if(checkPoints.Contains(i))
                    {
                        fuel += trackLayot[i];
                    }
                    else
                    {
                        fuel -= trackLayot[i];
                    }

                    if(fuel<=0)
                    {
                        Console.WriteLine($"{name} - reached {i}");
                        break;
                    }
                }
                if (fuel > 0)
                {
                    Console.WriteLine($"{name} - fuel left {fuel:f2}");
                }
            }
        }
    }
}
