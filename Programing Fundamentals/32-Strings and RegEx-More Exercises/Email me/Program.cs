using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Email_me
{
    class Program
    {
        static void Main(string[] args)
        {
            var text = Console.ReadLine().ToCharArray();

            var sumBeforeSymbol = 0;
            var sumAfterSymbol = 0;

            for (int i = 0; i < text.Length; i++)
            {
                if(text[i]=='@')
                {
                    break;
                }
                else
                {
                    sumBeforeSymbol += text[i];
                }
            }

            for (int i = text.Length-1; i >=0; i--)
            {
                if(text[i]=='@')
                {
                    break;
                }
                else
                {
                    sumAfterSymbol += text[i];
                }
            }

            var result = sumBeforeSymbol-sumAfterSymbol;

            if(result>=0)
            {
                Console.WriteLine("Call her!");
            }
            else
            {
                Console.WriteLine("She is not the one.");
            }
        }
    }
}
