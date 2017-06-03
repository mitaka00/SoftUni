using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Print_Part_Of_The_ASCII_Table
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstSymbol = int.Parse(Console.ReadLine());
            int lastSymbol = int.Parse(Console.ReadLine());
            for (int i=firstSymbol; i <= lastSymbol; i++)
            {
                Console.Write($"{(char)i} ");
            }
        }
    }
}
