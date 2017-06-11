using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Heists
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] priceOfTheJewelsAndGold = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            string[] loot = new string[1];
            var expenses = 0;
            var moneyFromJewels = 0;
            var moneyFromGold = 0;

            while(true)
            {
                loot = Console.ReadLine().Split(' ');
                if(loot[0] == "Jail" && loot[1] == "Time")
                {
                    break;
                }
                expenses += int.Parse(loot[1]);

                for (int i = 0; i < loot[0].Length; i++)
                {
                    if(loot[0][i]=='%')
                    {
                        moneyFromJewels += priceOfTheJewelsAndGold[0];
                    }

                    if(loot[0][i]=='$')
                    {
                        moneyFromGold += priceOfTheJewelsAndGold[1];
                    }
                }
            }

            if(moneyFromGold+moneyFromJewels>=expenses)
            {
                Console.WriteLine(
                    $"Heists will continue. Total earnings: {moneyFromJewels+moneyFromGold-expenses}.");
            }
            else
            {
                Console.WriteLine(
                    $"Have to find another job. Lost: {Math.Abs(moneyFromGold + moneyFromJewels - expenses)}.");
            }
        }
    }
}
