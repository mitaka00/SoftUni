using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMS_Typing
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var word = string.Empty;
            for (int i = 0; i < n; i++)
            {
                var num = int.Parse(Console.ReadLine());
                word = word + OutPutLetter(num);
            }
            Console.WriteLine(word);
            
        }
        static char OutPutLetter(int num)
        {
            if (num == 0)
            {
                return ' ';
            }
            else
            {
                var numberOFDigits = 0;
                var mainDigit = num % 10;
                while (num > 0)
                {
                    num = num / 10;
                    numberOFDigits++;
                }
                var offSetOFTheNumber = (mainDigit - 2) * 3;
                if (mainDigit == 8 || mainDigit == 9)
                {
                    offSetOFTheNumber += 1;
                }
                var letterIndex = (offSetOFTheNumber + numberOFDigits - 1);
                return (char)(letterIndex + 97);
            }
        }
    }
}
