using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Thea_The_Photographer
{
    class Program
    {
        
        static void Main(string[] args)
        {
            var numberPicture = int.Parse(Console.ReadLine());
            var filterTime = int.Parse(Console.ReadLine());
            var percentageofGoodPictures = int.Parse(Console.ReadLine());
            var uploatedToStorage = int.Parse(Console.ReadLine());

            var filterTimeSeconds = (long)numberPicture * filterTime;
            var pictureToUload = (long)Math.Ceiling(numberPicture * (percentageofGoodPictures / 100d));
            var uloadTimelSeconds = uploatedToStorage * pictureToUload;

            var totalSeconds = uloadTimelSeconds + filterTimeSeconds;

            var totalTimeNeeded = TimeSpan.FromSeconds(totalSeconds);

            Console.WriteLine(totalTimeNeeded.ToString(@"d\:hh\:mm\:ss"));


            //var days = totalSeconds / 3600 / 24;
            //var hours = (totalSeconds - days * 24 * 3600) / 3600;
            //var minutes = (totalSeconds - hours * 3600) / 60;
            //var seconds = (totalSeconds - minutes * 60)%60;
           // Console.WriteLine($"{days}:{hours:D2}:{minutes:d2}:{seconds:d2}");
        }
    }
}
