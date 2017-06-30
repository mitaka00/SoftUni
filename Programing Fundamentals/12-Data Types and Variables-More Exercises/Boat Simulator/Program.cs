using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Boat_Simulator
{
    class Program
    {
        static void Main(string[] args)
        {
            var firstBoatChar = char.Parse(Console.ReadLine());
            var secondBoatChar = char.Parse(Console.ReadLine());
            var numberOFLine = int.Parse(Console.ReadLine());
            var moves = string.Empty;
            var firstTiles = 0;
            var secondTiles = 0;
            for (int i = 1; i <= numberOFLine; i++)
            {
                moves = Console.ReadLine();
                if (moves == "UPGRADE")
                {
                    firstBoatChar = (char)(firstBoatChar+3);
                    secondBoatChar = (char)(secondBoatChar + 3);
                }
                else
                {
                    if (i % 2 != 0)
                    {
                        firstTiles += moves.Length;
   
                        if(firstTiles>=50)
                        {
                            break;
                        }
                    }

                    else
                    {
                        secondTiles += moves.Length;
                        if(secondTiles>=50)
                        {
                            break;
                        }
                    }
                }
            }
            if (secondTiles > firstTiles)
            {
                Console.WriteLine(secondBoatChar);
            }
            else
            {
                Console.WriteLine(firstBoatChar);
            }
        }
    }
}
