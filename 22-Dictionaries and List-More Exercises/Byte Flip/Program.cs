using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace Byte_Flip
{
    class Program
    {
        static void Main(string[] args)
        {
            var arr = Console.ReadLine().Split().ToList();

            arr.RemoveAll(x => x.Length != 2);

            for (int i = 0; i < arr.Count; i++)
            {
                string reverse = string.Concat(arr[i].Reverse());
                arr[i] = reverse;
            }

            arr.Reverse();

            foreach (var item in arr)
            {
                Console.Write(FromHexToChar(item));
            }

            Console.WriteLine();
        }

       static char FromHexToChar(string item)
        {
            return (char)Int16.Parse(item, NumberStyles.AllowHexSpecifier);
        }
    }
}
