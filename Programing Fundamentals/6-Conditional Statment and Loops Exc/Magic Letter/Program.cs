using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magic_Letter
{
    class Program
    {
        static void Main(string[] args)
        {
            var firstLetter = char.Parse(Console.ReadLine());
            var secondLetter = char.Parse(Console.ReadLine());
            var magicalLetter = char.Parse(Console.ReadLine());
            for (char a = firstLetter; a <= secondLetter; a++)
            {
                for (char b = firstLetter; b <= secondLetter; b++)
                {
                    for (char c = firstLetter; c <= secondLetter; c++)
                    {
                        if(a!=magicalLetter && b!=magicalLetter && c!=magicalLetter)
                        Console.Write($"{a}{b}{c} ");
                    }
                }
            }
        }
    }
}
