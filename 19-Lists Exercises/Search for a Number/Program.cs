using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Search_for_a_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            var modifications = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            var result = new List<int>();

            TakeElements(result, numbers, modifications);
            DeleteNumbers(result,modifications);
            FindSpecialNum(result,modifications);
        }

        private static void FindSpecialNum(List<int> result,int[]modifications)
        {
            var specialnum = false;

            for (int i = 0; i < result.Count; i++)
            {
                if ( modifications[2]== result[i]) 
                {
                    specialnum = true;
                }
            }

            if(specialnum==true)
            {
                Console.WriteLine("YES!");
            }
            else
            {
                Console.WriteLine("NO!");
            }
        }

        static void DeleteNumbers(List<int> result, int[] modifications)
        {
            for (int i = 0; i < modifications[1]; i++)
            {
                result.Remove(result[0]);
            }
        }

        static void TakeElements(List<int> result, List<int> numbers, int[] modifications)
        {
            for (int i = 0; i < modifications[0]; i++)
            {
                result.Add(numbers[i]);
            }
        }
    }
}
