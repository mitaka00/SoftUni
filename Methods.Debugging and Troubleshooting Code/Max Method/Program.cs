using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Max_Method
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = int.Parse(Console.ReadLine());
            var num2=int.Parse(Console.ReadLine());
            var num3 = int.Parse(Console.ReadLine());
            Console.WriteLine(GetMax(GetMax(num1,num2),num3));
        }

         static int GetMax(int num1,int num2)
        {
           if(num1>=num2)
            {
                return num1;
            }
           else
            {
                return num2;
            }
        }
    }
}
