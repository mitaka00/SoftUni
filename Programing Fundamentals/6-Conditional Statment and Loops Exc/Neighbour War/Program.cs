using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neighbour_War
{
    class Program
    {
        static void Main(string[] args)
        {
            var pdemage = int.Parse(Console.ReadLine());
            var gdemage = int.Parse(Console.ReadLine());
            var pstamina = 100;
            var gstamina = 100;
            var roundNumber = 0;
            for (int i = 1; i < 100; i++)
            {

                roundNumber++;
                if (i % 2 != 0)
                {
                    gstamina = gstamina - pdemage;
                    if (pstamina <= 0 || gstamina <= 0)
                    {
                        break;
                    }
                    Console.WriteLine("Pesho used Roundhouse kick and reduced Gosho to {0} health.", gstamina);
                   
                }
                if (i%2==0)
                {
                    pstamina = pstamina - gdemage;
                    if (pstamina <= 0 || gstamina <= 0)
                    {
                        break;
                    }
                    Console.WriteLine("Gosho used Thunderous fist and reduced Pesho to {0} health.",pstamina);
                   
                }
              
               
                if (i % 3 == 0)
                {
                    pstamina += 10;
                    gstamina += 10;
                }
             
            }
            if(gstamina>pstamina)
            {
                Console.WriteLine("Gosho won in {0}th round.",roundNumber);
            }
            else
            {
                Console.WriteLine("Pesho won in {0}th round.",roundNumber);
            }
        }
    }
}
