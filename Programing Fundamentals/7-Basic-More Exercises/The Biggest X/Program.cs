using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace The_Biggest_X
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var middleSpace = n - 2;
            var endSpace = 0;
            var endSpace2 = (n - 3) / 2;
            var middleSpace2 = 1;
            if (n > 3)
            {
                for (int row = 1; row <= n / 2 - 1; row++)
                {
                    for (int col = 1; col <= n; col++)
                    {
                        if (endSpace <= (n - 1) / 2 && middleSpace >= 1)
                        {
                            Console.Write(new string(' ', endSpace));
                            Console.Write("x");
                            Console.Write(new string(' ', middleSpace));
                            Console.Write("x");
                            Console.WriteLine(new string(' ', endSpace));
                            endSpace++;
                            middleSpace -= 2;
                        }
                    }
                }
                Console.Write(new string(' ', (n - 1) / 2));
                Console.Write("x");
                Console.WriteLine(new string(' ', (n - 1) / 2));

                for (int row = 0; row <= (n - 1) / 2; row++)
                {
                    for (int col = 1; col <= n; col++)
                    {
                        if (endSpace2 >= 0 && middleSpace2 <= n - 2)
                        {
                            Console.Write(new string(' ', endSpace2));
                            Console.Write("x");
                            Console.Write(new string(' ', middleSpace2));
                            Console.Write("x");
                            Console.WriteLine(new string(' ', endSpace2));
                            endSpace2--;
                            middleSpace2 += 2;
                        }
                    }
                }
            }
            else
            {
                Console.WriteLine("x x");
                Console.WriteLine(" x ");
                Console.WriteLine("x x");
            }
        }
    }
}
