using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.Globalization;

namespace Third_Problem
{
    class Program
    {
        //wantsumexam?
        static void Main(string[] args)
        {
            var startPokePower = double.Parse(Console.ReadLine());//n
            int startdistance = int.Parse(Console.ReadLine());//m
            var exhaustionFactor = int.Parse(Console.ReadLine());//y
            var count = 0;
            int pokePower = (int)startPokePower;

            while(true)
            {
               
                if (pokePower >=startdistance)
                {
                    if (pokePower == startPokePower / 2)
                    {
                        if (exhaustionFactor == 0)
                        {
                            pokePower -= startdistance;
                            count++;
                            continue;
                        }
                        else
                        {
                            pokePower /= exhaustionFactor;
                        }

                    }
                    else
                    {
                        pokePower -= startdistance;
                        count++;
                    }
                }
                else
                {
                    break;
                }
            }

            Console.WriteLine(pokePower);
            Console.WriteLine(count);
        }
    }
}
