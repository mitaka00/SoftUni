using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Different_Integer_Size
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            try
            {
               long num = long.Parse(input);
                Console.WriteLine($"{num} can fit in:");

                if (num <= sbyte.MaxValue && num >= sbyte.MinValue)
                {
                    Console.WriteLine("* sbyte");
                }
                if (num <= byte.MaxValue && num >= 0)
                {
                    Console.WriteLine("* byte");
                }
                if (num <= short.MaxValue && num >= short.MinValue)
                {
                    Console.WriteLine("* short");
                }
                if (num <= ushort.MaxValue && num >= 0)
                {
                    Console.WriteLine("* ushort");
                }
                if (num <= int.MaxValue && num >= int.MinValue)
                {
                    Console.WriteLine("* int");
                }
                if (num <= uint.MaxValue && num >= 0)
                {
                    Console.WriteLine("* uint");
                }
                if (num <= long.MaxValue && num >= long.MinValue)
                {
                    Console.WriteLine("* long");
                }
            }
            catch(OverflowException)
            {
                Console.WriteLine($"{input} can't fit in any type");
            }
        }
    }
}
