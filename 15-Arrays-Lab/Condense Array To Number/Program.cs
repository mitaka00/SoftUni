using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Condense_Array_To_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] num = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
           
          while(num.Length>1)
            {
                int[] condensed = new int[num.Length - 1];
                for (int i = 0; i < condensed.Length; i++)
                {
                    condensed[i] = num[i] + num[i + 1];
                }
                    num = condensed;
            }
            Console.WriteLine(num[0]);
        }
    }
}
