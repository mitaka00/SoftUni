using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Game_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = int.Parse(Console.ReadLine());
            var num2 = int.Parse(Console.ReadLine());
            var magicalNum = int.Parse(Console.ReadLine());
            var count = 0;
            var firstNum = 0;
            var secondNum = 0;
            for (int i = num1; i <= num2; i++)
            {
                for (int y = num1; y <= num2; y++)
                {
                    count++;
                    if(i+y==magicalNum)
                    {
                        firstNum = i;
                        secondNum = y;
                    }
                }
            }
            if(firstNum!=0)
            {
                Console.WriteLine($" Number found! {firstNum} + {secondNum} = {magicalNum}");
            }
            else
            {
                Console.WriteLine($"{count} combinations - neither equals {magicalNum}");
            }
        }
    }
}
