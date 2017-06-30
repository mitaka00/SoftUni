using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sort_Times
{
    class Program
    {
        static void Main(string[] args)
        {
            var times = Console.ReadLine().Split().ToList();
            times.Sort();
            Console.WriteLine(string.Join(", ", times));
        }
    }
}
