using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CensorShip
{
    class Program
    {
        static void Main(string[] args)
        {
            var censorWord = Console.ReadLine();
            var text = Console.ReadLine();

          if(text.Contains(censorWord))
            {
                text=text.Replace(censorWord, new string('*', censorWord.Length));
            }

            Console.WriteLine(text);
        }
    }
}
