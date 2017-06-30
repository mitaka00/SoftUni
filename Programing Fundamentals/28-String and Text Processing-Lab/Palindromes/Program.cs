using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Palindromes
{
    class Program
    {
        static void Main(string[] args)
        {
            var text = Console.ReadLine()
                .Split(new char[] { '.', ' ', ',', '?', '!' }, StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            var palindromes = new List<string>();

            foreach (var word in text)
            {
                if(wordIsPalindrome(word) && !palindromes.Contains(word))
                {
                    palindromes.Add(word);
                }
            }

            Console.WriteLine(string.Join(", ",palindromes.OrderBy(w=>w)));
        }

        static bool wordIsPalindrome(string word)
        {
            var secondWord = new string(word.Reverse().ToArray());

            if(secondWord==word)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
