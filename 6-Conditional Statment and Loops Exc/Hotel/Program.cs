using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hotel
{
    class Program
    {
        static void Main(string[] args)
        {
            var month = Console.ReadLine();
            var nights = int.Parse(Console.ReadLine());
            var priceForStudio = 0.0;
            var priceForDouble = 0.0;
            var priceForSuite = 0.0;
            var totalStudioPrice = 0.0;
            var totalDoublePrice = 0.0;
            var totalSuitePrice = 0.0;
            if (month =="May" || month=="October")
            {
                priceForStudio = 50;
                priceForDouble = 65;
                priceForSuite = 75;
                if (nights>7)
                {
                    priceForStudio = 0.95 * priceForStudio;
                }
               
            }
            else if(month=="June" || month=="September")
            {
                priceForSuite = 82;
                priceForStudio = 60;
                priceForDouble = 72;
                if(nights>14)
                {
                    priceForDouble = 0.90 * priceForDouble;
                }
            }
            else if(month=="July" || month=="August" || month=="December")
            {
                priceForStudio = 68;
                priceForDouble = 77;
                priceForSuite = 89;
                if(nights>14)
                {
                    priceForSuite = 0.85 * priceForSuite;
                }
                 
            }
            totalDoublePrice = priceForDouble * nights;
            totalSuitePrice = priceForSuite * nights;
            totalStudioPrice = priceForStudio * nights;
            if (nights>7 && (month=="October" || month=="September"))
            {
               totalStudioPrice=priceForStudio*(nights-1) ;
            }
            Console.WriteLine($"Studio: {totalStudioPrice:f2} lv.");
            Console.WriteLine($"Double: {totalDoublePrice:f2} lv.");
            Console.WriteLine($"Suite: {totalSuitePrice:f2} lv.");
        }
    }
}
