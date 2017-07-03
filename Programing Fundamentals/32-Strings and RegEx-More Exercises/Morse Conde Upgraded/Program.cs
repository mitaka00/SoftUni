using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Morse_Conde_Upgraded
{
    class Program
    {
        static void Main(string[] args)
        {
            var inPut = Console.ReadLine().Split('|').ToList();

            var outPut = new List<char>();
            int sum = 0;
            var length = 1;

            for (int i = 0; i < inPut.Count; i++)
            {
                length = 1;
                for (int j = 0; j < inPut[i].Length; j++)
                {
                    var num =int.Parse(inPut[i][j].ToString());

                    if (num == 0)
                    {
                        sum+=3;
                    }
                    else
                    {
                        sum+= 5;
                    }
                }

                for (int j = 0; j < inPut[i].Length-1; j++)
                {
                    var num = int.Parse(inPut[i][j].ToString());
                    var secondnum =int.Parse( inPut[i][j + 1].ToString());

                    if (num == secondnum)
                    {
                        length++;
                        sum += length;
                        length = 0;
                    }
                    else
                    {
                        length = 1;
                    }
                   
                }
               
                outPut.Add((char)(sum));
                sum = 0;
            }

            Console.WriteLine(string.Join("",outPut));
        }
    }
}
