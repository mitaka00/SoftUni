using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Master_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            for (int i = 0; i <= n; i++)
            {
                if (IsSymetric(i) && SumOfDigits(i) && ContainsEvenDigit(i))
                {
                    Console.WriteLine(i);
                }
             }
        }

        static bool ContainsEvenDigit(int n)
        {
            bool evenDigit = false;
                while(n>0)
                {
                    if((n%10)%2==0)
                    {
                        evenDigit=true;
                        break;
                    }
                    n /= 10;
                }
            return evenDigit;
        }

        static bool SumOfDigits(int n)
        {
            var sum = 0;
            while(n>0)
            {
                 sum += n % 10;
                 n /= 10;
            }
            
            if(sum%7==0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        static bool IsSymetric(int n)
        {
            string digits = "" + n;
            for (int i = 0; i < digits.Length / 2; i++)
                if (digits[i] != digits[digits.Length - i - 1])
                {
                    return false;
                }
            return true;
        }
    }
}
