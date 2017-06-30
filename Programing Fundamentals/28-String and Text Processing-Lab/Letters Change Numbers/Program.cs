using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Letters_Change_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split(new char[] { ' ','\t' },StringSplitOptions.RemoveEmptyEntries);

            var sum = 0.0;

            for (int i = 0; i < input.Length; i++)
            {
                var firstLetter = input[i][0];
                var number = double.Parse(input[i].Substring(1,input[i].Length-2));
                var lastLetter = input[i].Last();

                if(firstLetter>=65 && firstLetter<=90)
                {
                    number = number / (firstLetter-64);
                }
                else
                {
                    number = number * (firstLetter - 96);
                }

                if (lastLetter >= 65 && lastLetter <= 90)
                {
                    number = number - (lastLetter - 64);
                }
                else
                {
                    number = number + (lastLetter - 96);
                }

                sum += number;
            }

            Console.WriteLine("{0:f2}",sum);
        }
    }
}
