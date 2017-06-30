using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Numbers_in_Reversed_Order
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = (Console.ReadLine());

            PrintInReversedOrder(num);
        }

        static void PrintInReversedOrder(string num)
        {
            var reversed = string.Empty;
            if (num[0] == '-')
            {
                reversed = reversed + '-';

                for (int i = 1; i < num.Length; i++)
                {
                    reversed += num[num.Length - i];
                }
                Console.WriteLine(reversed);
            }
            else
            {
                for (int i = 1; i <= num.Length; i++)
                {
                    reversed += num[num.Length - i];
                }
                Console.WriteLine(reversed);
            }
        }
    }
}
