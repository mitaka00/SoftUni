using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Foreigh_Languages
{
    class Program
    {
        static void Main(string[] args)
        {
            var country = Console.ReadLine();
            if(country=="USA" || country=="England")
                Console.WriteLine("English");
            else if(country=="Spain" || country=="Mexico" || country=="Argentina")
                Console.WriteLine("Spanish");
            else
                Console.WriteLine("unknown");
        }
    }
}
