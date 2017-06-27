using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_Substring_Ocurrences
{
    class Program
    {
        static void Main(string[] args)
        {
            var text = Console.ReadLine().ToLower();
            var specialWord = Console.ReadLine().ToLower();

            var countWord = 0;
            var index = text.IndexOf(specialWord);

            while(index!=-1)
            {
                countWord++;
                index = text.IndexOf(specialWord, index + 1);
                    
            }

            Console.WriteLine(countWord);
        }
    }
}
