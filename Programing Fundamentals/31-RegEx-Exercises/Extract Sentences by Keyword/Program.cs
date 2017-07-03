using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Extract_Sentences_by_Keyword
{
    class Program
    {
        static void Main(string[] args)
        {
            var keyWord = Console.ReadLine();
            var allSetnences = Console.ReadLine().Split('.','?','!').ToList();

            foreach (var sentence in allSetnences)
            {
                string[] result=sentence.Trim()
                    .Split(new char[] { ',', ':', '(', ')', '[', ']', '\"', '\'', '/', '\\', ' ' }
                    ,StringSplitOptions.RemoveEmptyEntries);

                if(result.Contains(keyWord))
                {
                    Console.WriteLine(sentence.Trim()); ;
                }
            }
        }
    }
}
