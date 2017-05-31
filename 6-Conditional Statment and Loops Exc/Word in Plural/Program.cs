using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Word_in_Plural
{
    class Program
    {
        static void Main(string[] args)
        {
            var word = Console.ReadLine();
            if (word.EndsWith("y"))
            {
                word=word.Remove(word.Length - 1);
                word += "ies";
            }
            else if (word.EndsWith("o") || 
                word.EndsWith("s") || 
                word.EndsWith("sh")|| 
                word.EndsWith("z")|| 
                word.EndsWith("x") || 
                word.EndsWith("ch")) 
            {
                word += "es";
            }
            else
            {
                word += "s";
            }
            Console.WriteLine(word);
        }
    }
}
