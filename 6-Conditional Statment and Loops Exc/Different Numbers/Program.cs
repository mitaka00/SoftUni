using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Different_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var num1 = int.Parse(Console.ReadLine());
            var num2 = int.Parse(Console.ReadLine());
            if(num1<=num2-5)
            {
                for (int a = num1 ; a <= num1+1; a++)
                {
                    for (int  b= num1+1; b <= num1+2; b++)
                    {
                        for (int c = num1+2; c <= num1+3; c++)
                        {
                            for (int d= num1+3; d <= num1+4; d++)
                            {
                                for (int e = num1+4; e <= num2; e++)
                                {
                                    Console.Write(a);
                                    Console.Write(b);
                                    Console.Write(c);
                                    Console.Write(d);
                                    Console.WriteLine(e);
                                    e++;
                                }
                               
                            }
                            
                        }
                       
                    }
                   
                }
            }
            else
                Console.WriteLine("No");
        }
    }
}
