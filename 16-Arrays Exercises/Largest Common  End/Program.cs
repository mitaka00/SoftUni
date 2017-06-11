using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Largest_Common__End
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] arr1 = Console.ReadLine().Split(' ').ToArray();
            string[] arr2 = Console.ReadLine().Split(' ').ToArray();
            var eqaulWordsFromTheBeginning = 0;
            var equalWordsFromTheEnd = 0;

            for (int index = 0; index <Math.Min(arr1.Length,arr2.Length) ; index++)
            {
                if(arr1[index]==arr2[index])
                {
                    eqaulWordsFromTheBeginning++;
                }
          
                if(arr1[arr1.Length-1-index]==arr2[arr2.Length-1-index])
                {
                    equalWordsFromTheEnd++;
                }
            }

            if(eqaulWordsFromTheBeginning>=equalWordsFromTheEnd)
            {
                Console.WriteLine(eqaulWordsFromTheBeginning);
            }
            else
            {
                Console.WriteLine(equalWordsFromTheEnd);
            }
        }
    }
}
