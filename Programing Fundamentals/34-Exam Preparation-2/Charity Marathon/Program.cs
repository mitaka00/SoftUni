using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Charity_Marathon
{
    class Program
    {
        static void Main(string[] args)
        {
            var lengthOfTheMarathonInDays = int.Parse(Console.ReadLine());
            var numberRunners = int.Parse(Console.ReadLine());
            var numberLaps = int.Parse(Console.ReadLine());
            var lengthOfTheTrack = int.Parse(Console.ReadLine());
            var capacityOfTheTrack = int.Parse(Console.ReadLine());
            var moneyPerKilometer = decimal.Parse(Console.ReadLine());

            long maxRunners =capacityOfTheTrack * lengthOfTheMarathonInDays;  

            decimal totalKilometers = 0;

            if(maxRunners>numberRunners)
            {
                totalKilometers = (numberRunners * numberLaps * lengthOfTheTrack)/1000;
            }
            else
            {
                totalKilometers = (maxRunners * numberLaps * lengthOfTheTrack) / 1000;
            }

            var raisedMoney = totalKilometers * moneyPerKilometer;

            Console.WriteLine($"Money raised: {raisedMoney:f2}");
        }
    }
}
