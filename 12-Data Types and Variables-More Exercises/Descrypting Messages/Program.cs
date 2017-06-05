using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Descrypting_Messages
{
    class Program
    {
        static void Main(string[] args)
        {
            var key = int.Parse(Console.ReadLine());
            var numberOfLines = int.Parse(Console.ReadLine());
            char letter;
            var word = string.Empty;
            for (int i = 0; i < numberOfLines; i++)
            {
                letter = char.Parse(Console.ReadLine());
                word += (char)(letter + key);
            }
            Console.WriteLine(word);
        }
    }
}
