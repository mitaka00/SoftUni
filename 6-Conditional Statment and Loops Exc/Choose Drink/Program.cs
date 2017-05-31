using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Choose_Drink
{
    class Program
    {
        static void Main(string[] args)
        {
            var profession = Console.ReadLine();
            var quantity = int.Parse(Console.ReadLine());
            if(profession=="Athlete")
                Console.WriteLine($"The Athlete has to pay {quantity*0.70:f2}.");
            else if(profession=="Businessman" || profession=="Businesswoman")
                Console.WriteLine($"The {profession} has to pay {quantity*1:f2}.");
            else if(profession=="SoftUni Student")
                Console.WriteLine($"The SoftUni Student has to pay { quantity * 1.70:f2}.");
            else
                Console.WriteLine($"The {profession} has to pay {1.20*quantity:f2}.");
        }
    }
}
