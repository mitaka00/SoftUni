using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User_Logs
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var name = new SortedDictionary<string, Dictionary<string, int>>();

            while(input!="end")
            {
                var token=input.Split('=',' ').ToList();
                var username = token.Last();
                var ip = token[1];
             
                if(!name.ContainsKey(username))
                {
                    name[username] = new Dictionary<string, int>();
                }
                var Address = name[username];

                if(Address.ContainsKey(ip))
                {
                    Address[ip]++;
                }
                else
                {
                    Address[ip] = 1;
                }
                input = Console.ReadLine();
            }

            foreach (var username in name)
            {
                Console.WriteLine(username.Key+": ");

                foreach (var ip in username.Value)
                {
                    if (ip.Equals(username.Value.Last()))
                    {
                        Console.WriteLine($"{ip.Key} => {ip.Value}.");
                    }
                    else
                    {
                        Console.Write($"{ip.Key} => {ip.Value}, ");
                    }
                }

            }
            Console.WriteLine();
        }
    }
}
