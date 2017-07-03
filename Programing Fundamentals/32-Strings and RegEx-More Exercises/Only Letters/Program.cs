using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Only_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            var text = new StringBuilder(Console.ReadLine());

            var result = new List<char>();
            var numbersFromTheEnd = new List<char>();
            var isNumber = false;

            for (int i = 0; i < text.Length; i++)
            {
                if (text[i] >= 48 && text[i] <= 57)
                {
                    isNumber = true;
                    if(i==text.Length-1)
                    {
                        for (int j = i; j >= 0; j--)
                        {
                            if(text[j] >= 48 && text[j] <= 57)
                            {
                                numbersFromTheEnd.Add(text[j]);
                            }
                            else
                            {
                                break;
                            }
                        }
                    }
                    continue;
                }

                if (isNumber == true)
                {
                    result.Add(text[i]);
                }

                result.Add(text[i]);

                isNumber = false;
            }

            numbersFromTheEnd.Reverse();
            foreach (var num in numbersFromTheEnd)
            {
                result.Add(num);
            }

            Console.WriteLine(string.Join("", result));
        }
    }
}
