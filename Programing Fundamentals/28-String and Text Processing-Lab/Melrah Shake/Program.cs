using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Melrah_Shake
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var key = Console.ReadLine();

            while(true)
            {
                var leftIndex = input.IndexOf(key);
                var rightIndex = input.LastIndexOf(key);

                var leftIndexExist = leftIndex != -1;
                var rightIndexExist = rightIndex != -1;

                var leftAndRightIndexAreEqual = leftIndex == rightIndex;

                var keyIsEmpty = key != string.Empty;

                if(leftIndexExist && rightIndexExist && !leftAndRightIndexAreEqual && keyIsEmpty)
                {
                    Console.WriteLine("Shaked it.");

                    input=input.Remove(rightIndex, key.Length);
                    input=input.Remove(leftIndex, key.Length);

                    key = key.Remove(key.Length / 2, 1);
                }
                else
                {
                    Console.WriteLine("No shake.");
                    break;
                }
            }

            Console.WriteLine(input);
        }
    }
}
