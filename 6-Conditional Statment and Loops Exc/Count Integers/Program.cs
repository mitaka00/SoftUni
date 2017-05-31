using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            int num, br = 0 ;
            try
            {
                for (int i = 0; i < 100; i++)
                {
                    num = int.Parse(Console.ReadLine());
                    br++;
                }
            }
            catch
            {
                Console.WriteLine(br);
            }
        }
    }
}
