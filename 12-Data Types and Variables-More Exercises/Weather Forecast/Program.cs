using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather_Forecast
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var num = long.Parse(Console.ReadLine());
                if (num >= sbyte.MinValue && num <= sbyte.MaxValue)
                {
                    Console.WriteLine("Sunny");
                    return;
                }

                if (num >= int.MinValue && num <= int.MaxValue)
                {
                    Console.WriteLine("Cloudy");
                    return;
                }

                if (num >= long.MinValue && num <= long.MaxValue)
                {
                    Console.WriteLine("Windy");
                    return;
                }
            }
            catch
            {
                Console.WriteLine("Rainy");
                return;
            }
        }
    }
}
