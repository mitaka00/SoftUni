using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace A_Miner_Task
{
    class Program
    {
        static void Main(string[] args)
        {
            var dict = new Dictionary<string, int>();
            var resource = string.Empty;
            var quantity = 0;
            while(true)
            {
                resource = Console.ReadLine();
                if(resource=="stop")
                {
                    break;
                }
                quantity = int.Parse(Console.ReadLine());
                if (dict.ContainsKey(resource))
                {
                    dict[resource] += quantity;
                }
                else
                {
                    dict[resource] = quantity;
                }
            }
         

            foreach (var item in dict)
            {
                Console.WriteLine($"{item.Key} -> {item.Value}");
            }
        }
    }
}
