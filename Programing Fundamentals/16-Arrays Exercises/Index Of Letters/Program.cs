using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Index_Of_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] alphabet = new char[26];
            var word = Console.ReadLine();    

            for (int i = 0; i < alphabet.Length; i++)
            {
                alphabet[i] = (char)(i + 97);
               
                
            }

            for (int i = 0; i < word.Length; i++)
            {
                for (int j = 0; j < alphabet.Length; j++)
                {
                    if (word[i] == alphabet[j])
                    {
                        Console.WriteLine($"{word[i]} -> {alphabet[j] - 97}");
                    }
                }
            }
        }
    }
}
