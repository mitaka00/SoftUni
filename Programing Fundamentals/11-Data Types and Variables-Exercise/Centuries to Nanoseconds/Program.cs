using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace Centuries_to_Nanoseconds
{
    class Program
    {
        static void Main(string[] args)
        {
            int centuries = int.Parse(Console.ReadLine());
            int year = centuries * 100;
            int days = (int)(year * 365.2422);
            int hours = days * 24;
            long minutes = hours * 60;
            ulong seconds = (ulong)(minutes * 60);
            ulong milisconds = (ulong)(seconds * 1000);
            decimal microseconds = (decimal)(milisconds * 1000);
            decimal nanoseconds = (decimal)(microseconds * 1000);
            Console.WriteLine($"{centuries} centuries = {year} years = {days} days = {hours} hours = {minutes} minutes = {seconds} seconds = {milisconds} milliseconds = {microseconds} microseconds = {nanoseconds} nanoseconds");
        }
    }
}
