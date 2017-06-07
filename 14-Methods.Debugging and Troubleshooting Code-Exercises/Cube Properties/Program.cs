using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cube_Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            var lenght = double.Parse(Console.ReadLine());
            var parameter = Console.ReadLine();

            if (parameter == "face")
            {
                PrintLenghtOfTheFaceDiagonals(lenght);
            }
            if(parameter=="space")
            {
                PrintSpaceDiagonals(lenght);
            }
            if(parameter=="volume")
            {
                PrintVolume(lenght);
            }
            if(parameter=="area")
            {
                PrintArea(lenght);
            }
        }

        static void PrintArea(double lenght)
        {
            Console.WriteLine(Math.Round(6 * lenght *lenght,2));
        }

        static void PrintVolume(double lenght)
        {
            Console.WriteLine(Math.Round(lenght*lenght*lenght,2));
        }

        static void PrintSpaceDiagonals(double lenght)
        {
            Console.WriteLine(Math.Round(Math.Sqrt(3*lenght*lenght),2));
        }

        static void PrintLenghtOfTheFaceDiagonals(double lenght)
        {
            Console.WriteLine(Math.Round(Math.Sqrt(2*lenght*lenght),2));
        }
    }
}
