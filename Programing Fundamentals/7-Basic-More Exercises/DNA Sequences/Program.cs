using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DNA_Sequences
{
    class Program
    {
        static void Main(string[] args)
        {
            var sum = int.Parse(Console.ReadLine());
            var sequence = string.Empty;
            for (int i = 1; i <= 4; i++)
            {
                for (int m = 1; m <= 4; m++)
                {
                    for (int n = 1; n <= 4; n++)
                    {
                        if (i + m + n >= sum)
                        {
                            Console.Write("O");
                            Test(i);
                            Test(m);
                            Test(n);
                            Console.Write("O");
                            Console.Write(" ");
                        }
                        else
                        {
                            Console.Write("X");
                            Test(i);
                            Test(m);
                            Test(n);
                            Console.Write("X");
                            Console.Write(" ");
                        }
                    }
                    Console.WriteLine();
                }
            }
        }
        static void Test(int num)
        {
            if(num==1)
            {
                Console.Write("A");
            }
            else if(num==2)
            {
                Console.Write("C");
            }
            else if(num==3)
            {
                Console.Write("G");
            }
            else
            {
                Console.Write("T");
            }
        }
    }
}
        
     
 

