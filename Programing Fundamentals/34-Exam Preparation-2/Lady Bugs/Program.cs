using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lady_Bugs
{
    class Program
    {
        static void Main(string[] args)
        {
            var fieldSize = int.Parse(Console.ReadLine());
            var bugsIndexes = Console.ReadLine().Split().Select(int.Parse).ToArray();

            var field = new int[fieldSize];
            for (int i = 0; i < fieldSize; i++)
            {
                if(bugsIndexes.Contains(i))
                {
                    field[i] = 1;
                }
                else
                {
                    field[i] = 0;
                }
            }

            var command = Console.ReadLine();
            while(command!="end")
            {
                var commandInfo = command.Split().ToArray();

                var bugIndex = int.Parse(commandInfo[0]);
                var position = commandInfo[1];
                var steps = int.Parse(commandInfo[2]);

                ReplaceBug(bugIndex, position, steps, field);

                command = Console.ReadLine();
            }

            for (int i = 0; i < field.Length; i++)
            {
                Console.Write(field[i]+ " ");
            }
        }

        private static void ReplaceBug(int bugIndex, string position, int steps, int[] field)
        {
            try
            {
                if (field[bugIndex] == 1)
                {
                    if (position == "right")
                    {
                        MoveRight(field, bugIndex, steps);

                    }
                    if (position == "left")
                    {
                        MoveLeft(field, bugIndex, steps);
                    }
                }
                else
                {
                    return;
                }
            }
            catch
            {
                return;
            }
        }

        private static void MoveRight(int[] field, int bugIndex, int steps)
        {
            field[bugIndex] = 0;
            try
            {
                if (field[bugIndex + steps] == 0)
                {
                    field[bugIndex + steps] = 1;
                }
                else
                {
                    field[bugIndex + steps + steps] = 1;
                }
            }
            catch
            {
                return;
            }
        }

        private static void MoveLeft(int[] field, int bugIndex, int steps)
        {
                field[bugIndex] = 0;
                try
                {
                    if (field[bugIndex - steps] == 0)
                    {
                        field[bugIndex - steps] = 1;
                    }
                    else
                    {
                        field[bugIndex - steps - steps] = 1;
                    }
                }
                catch
                {
                    return;
                }
        }
    }
}
