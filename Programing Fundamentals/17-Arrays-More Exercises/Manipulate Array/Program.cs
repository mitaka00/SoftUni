using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manipulate_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] arr = Console.ReadLine().Split(' ').ToArray();
            var lines = int.Parse(Console.ReadLine());
            var command = new string[2];

            for (int i = 0; i < lines; i++)
            {
                command = Console.ReadLine().Split(' ').ToArray();

                if(command[0]=="Reverse")
                {
                    Array.Reverse(arr);
                }

                else if(command[0]=="Distinct")
                {
                    arr=arr.Distinct().ToArray();
                }

                else if(command[0]=="Replace")
                {
                    ReplaceWord(arr,command[1],command[2]);
                }
            }
            Console.WriteLine(string.Join(", ",arr));
        }

        static void ReplaceWord(string[] arr, string place, string word)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                if(i==int.Parse(place))
                {
                    arr[i] = word;
                }
            }
        }
    }
}
