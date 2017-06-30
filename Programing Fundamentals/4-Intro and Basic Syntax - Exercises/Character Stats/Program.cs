using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Character_Stats
{
    class Program
    {
        static void Main(string[] args)
        {
            var name = Console.ReadLine();
            var currentHealth = int.Parse(Console.ReadLine());
            var maximumHealth = int.Parse(Console.ReadLine());
            var currentEnergy = int.Parse(Console.ReadLine());
            var maximumEnegry = int.Parse(Console.ReadLine());
            Console.WriteLine("Name: {0}", name);
            Console.WriteLine("Health: |{0}{1}|",new string('|',currentHealth),new string('.',maximumHealth-currentHealth));
            Console.WriteLine("Energy: |{0}{1}|",new string('|',currentEnergy),new string('.',maximumEnegry-currentEnergy));
        }
    }
}
