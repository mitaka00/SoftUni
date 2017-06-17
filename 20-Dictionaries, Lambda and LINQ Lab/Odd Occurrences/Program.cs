using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Odd_Occurrences
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine().ToLower().Split();

            var countWord = new Dictionary<string, int>();
            var countedWords = new List<string>();

            foreach (var word in words)
            {
                if(countWord.ContainsKey(word))
                {
                    countWord[word]++;
                }
                else
                {
                    countWord[word] = 1;
                }
            }

            foreach (var word in countWord)
            {
                if(word.Value%2==1)
                {
                    countedWords.Add(word.Key);
                }
            }

            Console.WriteLine(string.Join(", ",countedWords));
        }
    }
}
