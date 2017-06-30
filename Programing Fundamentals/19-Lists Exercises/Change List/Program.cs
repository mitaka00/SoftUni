using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Change_List
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            var command = new List<string>();

            while (true)
            {
                command = Console.ReadLine().Split(' ').ToList();

                if (command[0] == "Delete")
                {
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        if(numbers[i]==int.Parse(command[1]))
                        {
                            numbers.Remove(numbers[i]);
                            i--;
                        }
                    }

                }
                if (command[0] == "Insert")
                {
                    numbers.Insert(int.Parse(command[2]), int.Parse(command[1]));
                }

                if (command[0] == "Odd" || command[0] == "Even")
                {
                    break;
                }
            }


            if (command[0] == "Odd")
            {
                for (int i = 0; i < numbers.Count; i++)
                {
                    if (numbers[i] % 2 != 0)
                    {
                        Console.Write(numbers[i] + " ");
                    }
                }
            }
            if (command[0] == "Even")
            {
                foreach (var num in numbers)
                {
                    if (num % 2 == 0)
                    {
                        Console.Write(num + " ");
                    }
                }
            }
        }
    }
}
