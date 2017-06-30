using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Personal_Exception
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                while (true)
                {
                    var number = int.Parse(Console.ReadLine());


                    if (number < 0)
                    {
                        throw new PersonalException();
                    }
                    Console.WriteLine(number);
                }
            }
            catch (PersonalException pe)
            {
                Console.WriteLine(pe.Message);
                return;
            }
          }
       }
    }
