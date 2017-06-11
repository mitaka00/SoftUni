using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var index = 0;
            var length = 1;
            var maxlength = 0;
            var bestindex = 0;

            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] == numbers[i - 1])
                {
                    length++;

                    if (maxlength < length)
                    {
                        bestindex = index;
                        maxlength = length;

                    }
                }

                else
                {
                    length = 1;
                    index = i;
                }
            }
        
            for (int i = bestindex; i <maxlength+bestindex; i++)
            {
                Console.Write(numbers[i]+" ");
            }
        }
    }
}
