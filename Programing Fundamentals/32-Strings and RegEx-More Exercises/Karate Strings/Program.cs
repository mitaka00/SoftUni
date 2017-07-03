using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Karate_Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            var text = Console.ReadLine();

            int power = 0;

            for (int i = 0; i < text.Length; i++)
            {
                if(text[i]=='>')
                {
                    power += int.Parse(text[i + 1].ToString());
                    i++; 

                    while(i<text.Length && power>0)
                    {
                        if(text[i]=='>')
                        {
                            break;
                        }
                        text=text.Remove(i, 1);
                        power--;
                    }
                    i--;
                }
            }

            Console.WriteLine(text);
        }
    }
}
