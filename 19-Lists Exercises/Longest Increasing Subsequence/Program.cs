using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Longest_Increasing_Subsequence
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console
                 .ReadLine()
                 .Split()
                 .Select(int.Parse)
                 .ToList();

            int[] maxLen = Enumerable.Repeat(1, list.Count).ToArray();
            int[] prev = Enumerable.Repeat(-1, list.Count).ToArray();

            int ansEnd = 0;

            for (int i = 1; i < list.Count; i++)
            {
                for (int j = 0; j < i; j++)
                {
                    if (list[j] < list[i])
                    {
                        int len = maxLen[j] + 1;
                        if (len > maxLen[i])
                        {
                            prev[i] = j;
                            maxLen[i] = len;
                            if (maxLen[ansEnd] < len)
                            {
                                ansEnd = i;
                            }
                        }
                    }
                }
            }

            List<int> answer = new List<int>();
            for (int i = ansEnd; i != -1; i = prev[i])
            {
                answer.Add(list[i]);
            }

            //Console.WriteLine(string.Join(" ", maxLen));
            Console.WriteLine(string.Join(" ", answer.Reverse<int>()));



        }
    }
}
