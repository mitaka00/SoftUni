using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Short_Word_Sorted
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = Console.ReadLine().ToLower().Split(
                '.', ',', ':', ';', '(', ')', '[', ']', '"', '\'', '\\', '/', '!', '?', ' ', '.')
                .ToList();

            var result = new List<string>();

            foreach (var word in words)
            {
                if(word.Length<5 && word!="")
                {
                    result.Add(word);
                }
            }
            
            Console.WriteLine(string.Join(", ", result.OrderBy(w => w).Distinct()));
        }
    }
}
