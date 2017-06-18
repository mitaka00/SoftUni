using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Phonebook
{
    class Program
    {
        static void Main(string[] args)
        {
            var phonebook = new SortedDictionary<string, string>();

            var command = new List<string>();

            do
            {
                command = Console.ReadLine().Split().ToList();

                if (command[0] == "A")
                {
                    if (phonebook.ContainsKey(command[1]))
                    {
                        phonebook[command[1]] = command[2];
                    }
                    else
                    {
                        phonebook[command[1]] = command[2];
                    }
                }
                else if (command[0] == "S")
                {
                    if (phonebook.ContainsKey(command[1]))
                    {
                        Console.WriteLine($"{command[1]} -> {phonebook[command[1]]}");
                    }
                    else
                    {
                        Console.WriteLine($"Contact {command[1]} does not exist.");
                    }
                }
                else if(command[0]=="ListAll")
                {
                    foreach (var name in phonebook)
                    {
                        Console.WriteLine($"{name.Key} -> {name.Value}");
                    }
                }
            }
            while (command[0] != "END");
        }
    }
}
