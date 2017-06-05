using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace String_Concatenation
{
    class Program
    {
        static void Main(string[] args)
        {
            var delimeter = char.Parse(Console.ReadLine());
            var evenOrOdd = Console.ReadLine();
            var n = int.Parse(Console.ReadLine());
            var word = string.Empty;
            var fullWord = string.Empty;
            for (int i = 1; i <= n; i++)
            {
                word = Console.ReadLine();
                if(evenOrOdd=="even" && i%2==0)
                {
                    fullWord += word + delimeter;
                }
                if(evenOrOdd=="odd" && i%2!=0)
                {
                    fullWord += word + delimeter;
                }
            }
            Console.WriteLine(fullWord.Remove(fullWord.Length-1));
        }
    }
}
