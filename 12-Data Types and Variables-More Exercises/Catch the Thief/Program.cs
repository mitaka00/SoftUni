using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catch_the_Thief
{
    class Program
    {
        static void Main(string[] args)
        {
            var numeralType = Console.ReadLine();
            var countID = long.Parse(Console.ReadLine());
            long IDValue = 0;
            float winingID = 0;
            var sentence = 0.0;
            if (numeralType == "sbyte")
            {
                winingID = sbyte.MinValue;
                for (int i = 0; i < countID; i++)
                {
                    IDValue = long.Parse(Console.ReadLine());
                    if (winingID < IDValue && IDValue <= sbyte.MaxValue)
                    {
                        winingID = IDValue;
                    }
                }
            }

            if (numeralType == "int")
            {
                winingID = int.MinValue;
                for (int i = 0; i < countID; i++)
                {
                    IDValue = long.Parse(Console.ReadLine());
                    if (winingID < IDValue && IDValue <= int.MaxValue)
                    {
                        winingID = IDValue;
                    }
                }
            }

            if (numeralType == "long")
            {
                winingID = long.MinValue;
                for (int i = 0; i < countID; i++)
                {
                    try
                    {
                        IDValue = long.Parse(Console.ReadLine());
                        if (winingID < IDValue && IDValue <= long.MaxValue)
                        {
                            winingID = IDValue;
                        }
                    }
                    catch { }
                }
            }
            if (winingID < 0)
            {
                sentence = Math.Ceiling(winingID / sbyte.MinValue);
            }
            else
            {
                sentence = Math.Ceiling(winingID / sbyte.MaxValue);
            }
        
            if(sentence==1)
            {
                Console.WriteLine($"Prisoner with id {winingID} is sentenced to {sentence} year");
            }
            else
                Console.WriteLine($"Prisoner with id {winingID} is sentenced to {sentence} years");
        }
    }
}

