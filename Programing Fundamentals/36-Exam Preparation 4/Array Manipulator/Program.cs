using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Array_Manipulator
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine().Split().Select(int.Parse).ToList();

            var command = Console.ReadLine();
            while(command!="end")
            {
                var commandParts=command.Split().ToList();

                if(commandParts[0]=="exchange")
                {
                    var index = int.Parse(commandParts[1]);

                    if (index >= input.Count || index<0)
                    {
                        Console.WriteLine("Invalid index");
                    }
                    else
                    {
                        var fitstHalf = input.Take(index + 1);
                        var secondHalf = input.Skip(index + 1);

                        input = secondHalf.Concat(fitstHalf).ToList();
                     }
                }
                else if(commandParts[0]=="max")
                {
                    FindMaxIndexOfElement(commandParts,input);
                }
                else if(commandParts[0]=="min")
                {
                    FindMinIndexOfElement(commandParts, input);
                }
                else if(commandParts[0]=="first")
                {
                    FindFirstElements(commandParts, input);
                }
                else if (commandParts[0] == "last")
                {
                    FindLastElements(commandParts, input);
                }

                command = Console.ReadLine();
            }

            Console.WriteLine($"[{string.Join(", ",input)}]");
        }

        private static void FindLastElements(List<string> commandParts, List<int> input)
        {
            var count = int.Parse(commandParts[1]);
            var type = commandParts[2];
            var result = new List<int>();

            if (count > input.Count)
            {
                Console.WriteLine("Invalid count");
                return;
            }
            else
            {
                for (int i = input.Count-1; i >= 0; i--)
                {
                    if (type == "even" && input[i] % 2 == 0)
                    {
                        if (result.Count < count)
                        {
                            result.Add(input[i]);
                        }
                        else
                        {
                            break;
                        }
                    }
                    else if (type == "odd" && input[i] % 2 == 1)
                    {
                        if (result.Count < count)
                        {
                            result.Add(input[i]);
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
            result.Reverse();
            Console.WriteLine($"[{string.Join(", ", result)}]");
        }

        private static void FindFirstElements(List<string> commandParts, List<int> input)
        {
            var count = int.Parse(commandParts[1]);
            var type = commandParts[2];
            var result = new List<int>();

            if (count > input.Count)
            {
                Console.WriteLine("Invalid count");
                return;
            }
            else
            {
                for (int i = 0; i < input.Count; i++)
                {
                    if (type == "even" && input[i] % 2 == 0)
                    {
                        if (result.Count < count)
                        {
                            result.Add(input[i]);
                        }
                        else
                        {
                            break;
                        }
                    }
                    else if (type == "odd" && input[i] % 2 == 1)
                    {
                        if (result.Count < count)
                        {
                            result.Add(input[i]);
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }

            Console.WriteLine($"[{string.Join(", ",result)}]");
        }

        private static void FindMinIndexOfElement(List<string> commandParts, List<int> input)
        {
            var type = commandParts[1];
            var minIndex = -1;
            var minNumber = int.MaxValue;

            for (int i = 0; i < input.Count; i++)
            {
                if (type == "even" && input[i] % 2 == 0)
                {
                    if (minNumber >= input[i])
                    {
                        minNumber = input[i];
                        minIndex = i;
                    }
                }

                if (type == "odd" && input[i] % 2 == 1)
                {
                    if (minNumber >= input[i])
                    {
                        minNumber = input[i];
                        minIndex = i;
                    }
                }
            }

            if (minIndex != -1)
            {
                Console.WriteLine(minIndex);
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }

        private static void FindMaxIndexOfElement(List<string> commandParts,List<int> input)
        {
            var type = commandParts[1];
            var maxIndex = -1;
            var maxnumber = int.MinValue;

            for (int i = 0; i < input.Count; i++)
            {
                if (type == "even" && input[i] % 2 == 0)
                {
                    if (maxnumber <= input[i])
                    {
                        maxnumber = input[i];
                        maxIndex = i;
                    }
                }

                if (type == "odd" && input[i] % 2 == 1)
                {
                    if (maxnumber <= input[i])
                    {
                        maxnumber = input[i];
                        maxIndex = i;
                    }
                }
            }

            if (maxIndex != -1)
            {
                Console.WriteLine(maxIndex);
            }
            else
            {
                Console.WriteLine("No matches");
            }
        }
    }
}
