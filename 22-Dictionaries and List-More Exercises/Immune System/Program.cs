using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Immune_System
{
    class Program
    {
        static void Main(string[] args)
        {
            var startedHealth = int.Parse(Console.ReadLine());
            var virusname = Console.ReadLine();
            var virusList = new List<string>();

            var health = startedHealth;
            var timeToDefeat = 0;
           
            while(virusname!="end")
            {
                var virusStrength = virusname.Sum(x => x) / 3;
                
              if(!virusList.Contains(virusname))
                {
                    virusList.Add(virusname);
                    timeToDefeat = virusStrength * virusname.Length;
                }
              else
                {
                    timeToDefeat = (virusStrength * virusname.Length)/3;
                }

                Console.WriteLine($"Virus {virusname}: {virusStrength} => {timeToDefeat} seconds");

                if(health>timeToDefeat)
                {
                    health -= timeToDefeat;
                    var seconds = timeToDefeat % 60;
                    var min = timeToDefeat / 60;

                    Console.WriteLine($"{virusname} defeated in {min}m {seconds}s.");
                    Console.WriteLine($"Remaining health: {health}");
                 
                    if(health+(int)(0.2*health)>startedHealth)
                    {
                        health = startedHealth;
                    }
                    else
                    {
                        health += (int)(0.2 * health);
                    }
                }
                else
                {
                    Console.WriteLine("Immune System Defeated.");
                    return;
                }
                virusname=Console.ReadLine();
            }
            Console.WriteLine($"Final Health: {health}");
        }
    }
}
