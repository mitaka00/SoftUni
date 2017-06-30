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
            var numbers = Console.ReadLine().Split(' ').Select(long.Parse).ToList();

            var startedCommand = Console.ReadLine();

            while(startedCommand!="print")
            {
                var command = startedCommand.Split(' ').ToList();

                if(command[0]=="add")
                {
                    AddNum(command, numbers);
                }

                if(command[0]=="addMany")
                {
                    AddManyNum(command, numbers);
                }
                if(command[0]=="contains")
                {
                    PrintIndexOfContainElement(command, numbers);
                }
                if(command[0]=="remove")
                {
                    RemoveAtSpecifiedIndex(command, numbers);
                }
                if(command[0]=="shift")
                {
                    ShiftToTheLeft(command, numbers);
                }
                if(command[0]=="sumPairs")
                {
                    List<long> newList = new List<long>();
                    for (int i = 0; i < numbers.Count - 1; i += 2)
                    {
                        newList.Add(numbers[i] + numbers[i + 1]);
                    }
                    if (numbers.Count % 2 == 1)
                    {
                        newList.Add(numbers[numbers.Count - 1]);
                    }
                    numbers = newList;

                }
                startedCommand = Console.ReadLine();
            }

            Console.WriteLine($"[{string.Join(", ",numbers)}]");
        }

        static void ShiftToTheLeft(List<string> command, List<long> numbers)
        {
            for (int i = 0; i < int.Parse(command[1]); i++)
            {
                long lastElement = numbers[0];

                for (int j = 0; j < numbers.Count-1; j++)
                {
                    numbers[j] = numbers[j + 1];
                }
                numbers[numbers.Count - 1]=lastElement;
            }
        }

        static void RemoveAtSpecifiedIndex(List<string> command, List<long> numbers)
        {
            numbers.RemoveAt(int.Parse(command[1]));
        }

        static void PrintIndexOfContainElement(List<string> command, List<long> numbers)
        {
            var index = -1;
            for (int i = 0; i < numbers.Count; i++)
            {
                if(int.Parse(command[1])==numbers[i])
                {
                    index = i;
                    break;
                }
            }

            Console.WriteLine(index);
        }

        static void AddManyNum(List<string> command, List<long> numbers)
        {
            for (int i = command.Count-1; i >=2 ; i--)
            {
                numbers.Insert(int.Parse(command[1]), int.Parse(command[i]));
            }
        }

        static void AddNum(List<string> command, List<long> numbers)
        {
            numbers.Insert(int.Parse(command[1]), int.Parse(command[2]));
        }
    }
}
