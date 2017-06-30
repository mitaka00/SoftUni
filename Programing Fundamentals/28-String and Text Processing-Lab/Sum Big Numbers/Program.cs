using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_Big_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            StringBuilder sum = new StringBuilder("");
            var firstNum = Console.ReadLine();
            var secondNum = Console.ReadLine();
            var first = "";
            var second = "";

            if (firstNum[0] == '0' || secondNum[0] == '0')
            {
                first = firstNum.TrimStart(new char[] { '0' });
                second = secondNum.TrimStart(new char[] { '0' });
                firstNum = first;
                secondNum = second;
            }

            if (firstNum.Length > secondNum.Length)
            {
                var difference = firstNum.Length - secondNum.Length;
                secondNum = new string('0', difference) + secondNum;
            }
            else if (firstNum.Length < secondNum.Length)
            {
                var difference = secondNum.Length - firstNum.Length;
                firstNum = new string('0', difference) + firstNum;

            }

            var leftover = 0;

            for (int i = secondNum.Length - 1; i >= 0; i--)
            {

                var sumNums = Convert.ToInt32(firstNum[i] - '0') + Convert.ToInt32(secondNum[i] - '0') + leftover;
                if (sumNums < 10)
                {
                    sum.Append(sumNums);
                    leftover = 0;
                }
                else
                {
                    if (i != 0)
                    {
                        if (Convert.ToInt32(firstNum[i] - '0') + Convert.ToInt32(secondNum[i] - '0') + leftover == 10)
                        {
                            sum.Append('0');
                            leftover = 1;
                        }
                        else
                        {
                            sum.Append(sumNums - 10);
                            leftover = 1;
                        }
                    }
                    else
                    {
                        sum.Append(string.Join("", Convert.ToString(Convert.ToInt32(firstNum[i] - '0') + Convert.ToInt32(secondNum[i] - '0') + leftover).Reverse()));
                    }

                }
               
            }
            Console.WriteLine(string.Join("", sum.ToString().Reverse()));
        }
    }
}
