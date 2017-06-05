using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_of_Chars
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            char letter;
            var sum = 0;
            for (int i = 0; i < n; i++)
            {
                letter = char.Parse(Console.ReadLine());
                sum += (int)letter;
            }
            Console.WriteLine("The sum equals: {0}",sum);
        }
    }
}
