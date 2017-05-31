using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant_Discount
{
    class Program
    {
        static void Main(string[] args)
        {
            var people = int.Parse(Console.ReadLine());
            string hallName=string.Empty;
            double price = 0.0; 
            var package = Console.ReadLine();
            if(people<=50)
            {
                hallName = "Small Hall";
                price = 2500;
            }
            else if(people>50 && people<=100)
            {
                hallName = "Terrace";
                price = 5000;
            }
            else if(people>100 && people<=120)
            {
                hallName = "Great Hall";
                price = 7500;
            }
            else if (people>120)
            {
                Console.WriteLine("We do not have an appropriate hall.");
                return;
            }
            
            if(package=="Normal")
            {
                price = price + 500;
                price = price*0.95;
                price =price/ people;
                
            }
            else if(package=="Gold")
            {
                price = price + 750;
                price = price * 0.90;
                price =price/ people;
                
            }
            else if (package=="Platinum")
            {
                price = price + 1000;
                price = price*0.85;
                price =price / people;
                
            }

            Console.WriteLine("We can offer you the {0}", hallName);
            Console.WriteLine("The price per person is {0:f2}$",price);
        }
    }
}
