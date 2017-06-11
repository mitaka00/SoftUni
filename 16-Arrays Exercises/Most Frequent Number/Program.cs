using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Most_Frequent_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            var index = 0;
            var eqalNumbers = 1;
            var maxEqualNumbers = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                for (int j = i + 1; j < arr.Length; j++)
                {
                    if (arr[i] == arr[j])
                    {
                        eqalNumbers++;
                        if (maxEqualNumbers < eqalNumbers)
                        {
                            index = i;
                        }
                    }
                    else
                    {
                        eqalNumbers = 1;
                    }
                }
            }
            Console.WriteLine(arr[index]);
        }
    }
}
