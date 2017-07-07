using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Files
{
    class Program
    {
        static void Main(string[] args)
        {

            Dictionary<string, Dictionary<string, ulong>> all = new Dictionary<string, Dictionary<string, ulong>>();
            int n = int.Parse(Console.ReadLine());
            var separators = new char[] { '\\', ';' };
            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split(separators).ToArray();
                var rootOfFile = input[0];
                var size = ulong.Parse(input[input.Length - 1]);
                var file = input[input.Length - 2];

                if (all.ContainsKey(rootOfFile))
                {
                    if (all[rootOfFile].ContainsKey(file))
                    {
                        all[rootOfFile][file] = size;
                    }
                    else
                    {
                        all[rootOfFile].Add(file, size);
                    }
                }
                else
                {
                    var newOne = new Dictionary<string, ulong>();
                    newOne.Add(file, size);
                    all.Add(rootOfFile, newOne);
                }

            }

            var input2 = Console.ReadLine().Split(' ');
            var extension = input2[0];
            var rootD = input2[2];
            bool y = false;
            foreach (var item in all.Where(x => x.Key == rootD).ToArray())
            {
                foreach (var item2 in item.Value.OrderByDescending(x => x.Value).ThenBy(x => x.Key).Where(x => x.Key.EndsWith($"{extension}")))
                {
                    Console.WriteLine($"{item2.Key} - {item2.Value} KB");
                    y = true;
                }
            }
            if (y == false)
            {
                Console.WriteLine("No");
            }
        }
    }
}
