using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

            int k = numbers.Length / 4;
            var row1LeftPart = numbers.Take(k).Reverse().ToArray();
            var row1RightPart = numbers.Reverse().Take(k).ToArray();
            var row1 = row1LeftPart.Concat(row1RightPart).ToArray();
            var row2 = numbers.Skip(k).Take(2 * k).ToArray();

            var result = new List<int>();
            for (int i = 0; i < row2.Length; i++)
            {
                result.Add(row1[i] + row2[i]);
            }

            Console.WriteLine(string.Join(" ",result));
        }
    }
}
