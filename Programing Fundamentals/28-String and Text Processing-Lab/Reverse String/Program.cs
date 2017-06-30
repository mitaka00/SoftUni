using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _28_String_and_Text_Processing_Lab
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();

            string reversedText = new string(text.Reverse().ToArray());

            Console.WriteLine(string.Join("",reversedText));
        }
    }
}
