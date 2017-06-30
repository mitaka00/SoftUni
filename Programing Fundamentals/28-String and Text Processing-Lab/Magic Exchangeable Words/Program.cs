using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Magic_Exchangeable_Words
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine().Split();

            var firstWord = words[0].ToLower();
            var secondWord = words[1].ToLower();

            var exchangeable = isExchangeable(firstWord,secondWord);
            Console.WriteLine(exchangeable);
        }

        static string isExchangeable(string firstWord, string secondWord)
        {
            string shorterWord = string.Empty;
            var longerWord = string.Empty;
            if (firstWord.Length != secondWord.Length)
            {
                shorterWord = firstWord.Length > secondWord.Length ? shorterWord = secondWord : shorterWord = firstWord;
                longerWord = firstWord.Length > secondWord.Length ? longerWord = firstWord : longerWord = secondWord;
            }

            else
            {
                shorterWord = firstWord;
                longerWord = secondWord;
            }
                var shorterWordLetters = new List<char>();
                var longerWordLetters = new List<char>();

                for (int i = 0; i < shorterWord.Length; i++)
                {
                    if (!shorterWordLetters.Contains(shorterWord[i]))
                    {
                        shorterWordLetters.Add(shorterWord[i]);
                    }
                }

                for (int i = 0; i < longerWord.Length; i++)
                {
                    if (!longerWordLetters.Contains(longerWord[i]))
                    {
                        longerWordLetters.Add(longerWord[i]);
                    }
                }

                if (shorterWordLetters.Count == longerWordLetters.Count)
                {
                    return "true";
                }

                else
                {
                    return "false";
                }
            }
           
        }
    }