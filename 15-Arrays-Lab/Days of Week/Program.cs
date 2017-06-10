using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Days_of_Week
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] daysOfWeek ={"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" };
            var day = int.Parse(Console.ReadLine());
            if(day>=1 && day<=7)
            {
                Console.WriteLine(daysOfWeek[day-1]);
            }
            else
            {
                Console.WriteLine("Invalid Day!");
            }
        }
    }
}
