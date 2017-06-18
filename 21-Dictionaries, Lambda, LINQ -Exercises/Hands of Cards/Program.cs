using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hands_of_Cards
{
    class Program
    {
        static void Main(string[] args)
        {
            var namesCards = new Dictionary<string, List<int>>();
            var inPut = Console.ReadLine();
            
            while(inPut!="JOKER")
            {
                var token = inPut.Split(':');
                var name = token[0];
                var cards = token[1].
                    Split(", ".ToCharArray(),
                    StringSplitOptions
                    .RemoveEmptyEntries)
                    .Select(a => CalculatedCardValue(a));

                if(!namesCards.ContainsKey(name))
                {
                    namesCards[name] = new List<int>();
                }

                namesCards[name].AddRange(cards);

                inPut = Console.ReadLine();       
                }

            foreach (var nameCards in namesCards)
            {
                var name=nameCards.Key;
                var cards = nameCards.Value;

                var totalSum = cards.Distinct().Sum();

                Console.WriteLine($"{name}: {totalSum}");
            }
          }

        static int CalculatedCardValue(string cards)
        {
            var cardPower = new Dictionary<string, int>();
            cardPower["J"] = 11;
            cardPower["Q"] = 12;
            cardPower["K"] = 13;
            cardPower["A"] = 14;
            for (int i = 0; i <=10; i++)
            {
                cardPower[i.ToString()] = i;
            }

            var cardTypes = new Dictionary<string, int>();
            cardTypes["S"] = 4;
            cardTypes["H"] = 3;
            cardTypes["D"] = 2;
            cardTypes["C"] = 1;

            var power = cards.Substring(0, cards.Length - 1);
            var type = cards.Substring(cards.Length - 1);

            var value = cardPower[power] * cardTypes[type];
            return value;
        }
    }
}
