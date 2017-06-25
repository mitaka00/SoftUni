using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Punctuation_Finder
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines("sample_text.txt");
            var firstOutput = new List<char>();
            var secondOutput = new List<string>();

            var specialSymbols = new char[] { '.', ',', '!', '?', ':' }; 

            foreach (string word in lines)
            {
                foreach (var letter in word)
                {
                    if (specialSymbols.Contains(letter))
                    {
                        firstOutput.Add(letter);
                    }
                }
            }

            foreach (var word in lines)
            {
                var words = word.Split(".,!?:".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
                secondOutput.AddRange(words);
            }

            File.WriteAllText("firstoutput.txt",string.Join(", ",firstOutput));
            File.WriteAllText("secondoutput.txt",string.Join(" ",secondOutput));
        }
    }
}
