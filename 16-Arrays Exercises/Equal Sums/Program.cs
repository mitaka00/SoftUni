using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Equal_Sums
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            var leftsum = 0;
            var rightsum = 0;
            var index = -1;

            for (int i = 0; i < numbers.Length; i++)
            {
                leftsum = FindLeftSum(numbers,i);
                rightsum = FindRightSum(numbers, i);

                if(leftsum==rightsum)
                {
                    index = i;
                }
            }

            if(index==-1)
            {
                Console.WriteLine("no");
            }
            
            else
            {
                Console.WriteLine(index);
            }
        }

        static int FindRightSum(int[] numbers, int i)
        {
            var rightSum = 0;

            for (int j = i+1; j < numbers.Length; j++)
            {
                rightSum += numbers[j];
            }

            return rightSum;
        }

        static int FindLeftSum(int[] numbers,int i)
        {
            var leftsum = 0;

            for (int j = 0; j <i ; j++)
            {
                leftsum += numbers[j];
            }

            return leftsum;
        }
    }
}
