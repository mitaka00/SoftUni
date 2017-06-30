using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Split_by_Word_Casing
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine().Split(
                new char[] { ' ', ',', ';', ':', '.', '!', '(', ')', '"', '\'', '/', '\\', '[', ']' },
                StringSplitOptions.RemoveEmptyEntries).ToList();

            var smallLetters = new List<string>();
            var bigLetters = new List<string>();
            var mixedLetters = new List<string>();
            var allLowercaseLetter = true;
            var allUppercaseLetter = true;

            foreach (var word in words)
            {
                for (int i = 0; i < word.Length; i++)
                {
                    if(word[i]>=65 && word[i]<=90)
                    {
                        allLowercaseLetter=false;
                    }

                    else if(word[i]>=97 && word[i]<=122)
                    {
                        allUppercaseLetter=false;
                    }
                    else
                    {
                        allLowercaseLetter = false;
                        allUppercaseLetter = false;
                    }
                }

                if (allUppercaseLetter== true)
                {
                    bigLetters.Add(word);
                }
                else if (allLowercaseLetter ==true)
                {
                    smallLetters.Add(word);
                }
                else
                {
                    mixedLetters.Add(word);
                }

                allLowercaseLetter =true;
                allUppercaseLetter = true;
            }

            Console.WriteLine($"Lower-case: {string.Join(", ",smallLetters)}");
            Console.WriteLine($"Mixed-case: {string.Join(", ", mixedLetters)}");
            Console.WriteLine($"Upper-case: {string.Join(", ", bigLetters)}");
        }
    }
}
