using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sweet_Dessert
{
    class Program
    {
        static void Main(string[] args)
        {
            var cash = double.Parse(Console.ReadLine());
            var numberOfGuests = int.Parse(Console.ReadLine());
            var pricePerBanana = double.Parse(Console.ReadLine());
            var pricePerEgg = double.Parse(Console.ReadLine());
            var kiloOfBerries = double.Parse(Console.ReadLine());

            var eggsPerSet = 4;
            var bananasPerSet = 2;
            double berriesPerSet = 0.2;

           

           var set=FindSets(numberOfGuests);

            var neededMoney = set * (eggsPerSet * pricePerEgg) + set * (bananasPerSet * pricePerBanana) + set * (berriesPerSet * kiloOfBerries);

            if(cash>=neededMoney)
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {neededMoney:f2}lv.");
            }
            else
            {
                Console.WriteLine(
                    $"Ivancho will have to withdraw money - he will need {neededMoney-cash:f2}lv more.");
            }
        }

        private static int FindSets(int numberOfGuests)
        {
            if(numberOfGuests%6==0)
            {
                return numberOfGuests / 6;
            }
            else
            {
                return numberOfGuests / 6 + 1;
            }
        }
    }
}
