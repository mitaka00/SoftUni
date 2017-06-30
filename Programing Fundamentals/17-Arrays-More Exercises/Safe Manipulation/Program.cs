using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Safe_Manipulation
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] arr = Console.ReadLine().Split(' ').ToArray();
    
            var command = new string[2];

          while(command[0]!="END")
            {
                    command = Console.ReadLine().Split(' ').ToArray();

                    if (command[0] == "Reverse")
                    {
                        Array.Reverse(arr);
                    }

                    else if (command[0] == "Distinct")
                    {
                        arr = arr.Distinct().ToArray();
                    }

                    else if (command[0] == "Replace")
                    {

                         if (int.Parse(command[1]) < 0 || int.Parse(command[1]) > arr.Length - 1)
                         {
                            Console.WriteLine("Invalid input!");
                         }

                        else
                        {
                            ReplaceWord(arr, command[1], command[2]);
                        }
                    }
                    else if(command[0]!="END")
                {
                    Console.WriteLine("Invalid input!");
                }
                }
             
            Console.WriteLine(string.Join(", ", arr));
        }

        static void ReplaceWord(string[] arr, string place, string word)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                if (i == int.Parse(place))
                {
                    arr[i] = word;
                }
            }
        }
    }
}
