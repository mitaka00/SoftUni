using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compare_Char_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] arr1 = Console.ReadLine().Split(' ').Select(char.Parse).ToArray();
            char[] arr2 = Console.ReadLine().Split(' ').Select(char.Parse).ToArray();

            for (int i = 0; i < Math.Min(arr1.Length,arr2.Length); i++)
            {
                if(arr2[i]==arr1[i])
                {
                    continue;
                }
                else
                {
                    if(arr2[i]<arr1[i])
                    {
                        Console.WriteLine(string.Join("",arr2));
                        Console.WriteLine(string.Join("",arr1));
                        return;
                    }
                  if(arr2[i]>arr1[i])
                    {
                        Console.WriteLine(string.Join("", arr1));
                        Console.WriteLine(string.Join("", arr2));
                        return;
                    }
                }
            }
           if(arr1.Length>=arr2.Length)
            {
                Console.WriteLine(string.Join("", arr2));
                Console.WriteLine(string.Join("", arr1));
            }
           else
            {
                Console.WriteLine(string.Join("", arr1));
                Console.WriteLine(string.Join("", arr2));
            }
        }
    }
}
