using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back_in_30_Minutes_
{
    class Program
    {
        static void Main(string[] args)
        {
            var hours = int.Parse(Console.ReadLine());
            var minutes = int.Parse(Console.ReadLine());
            
            if (minutes >= 30 && hours < 23)
            {
                hours++;
                minutes = (minutes + 30);
            }
            if(minutes>=30 && hours==23)
            {
                hours = 0;
                minutes = (minutes + 30);
            }
            if (minutes < 30)
                minutes = minutes + 30;
            minutes = minutes % 60;
            if (minutes < 10)
                Console.WriteLine($"{hours}:0{minutes}");
            else
                Console.WriteLine($"{hours}:{minutes}");
        }
    }
}
