using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Make_a_Word
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var character = string.Empty;
            var word = string.Empty;
            for (int i = 0; i < n; i++)
            {
                character = Console.ReadLine();
                word += character;
            }
            Console.WriteLine("The word is: {0}",word);
        }
    }
}
