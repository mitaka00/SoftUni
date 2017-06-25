using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Play_Catch
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split().Select(int.Parse).ToList();

            var countExceptions = 0;
            while(countExceptions<3)
            {
                var input = Console.ReadLine().Split();

                try
                {
                    var command= input[0];

                    if(command=="Replace")
                    {
                        var index = int.Parse(input[1]);
                        var number = int.Parse(input[2]);

                        numbers.RemoveAt(index);
                        numbers.Insert(index, number);
                    }

                    if(command=="Print")
                    {
                        var startindex = int.Parse(input[1]);
                        var endindex = int.Parse(input[2]);

                        Console.WriteLine(string.Join(", ",numbers.GetRange(startindex,endindex-startindex+1)));
                    }

                    if(command=="Show")
                    {
                        var index = int.Parse(input[1]);

                        Console.WriteLine(numbers[index]);
                    }
                }
                catch
                {
                    if (input.Length > 2)
                    {
                        int check;
                        if (int.TryParse(input[1], out check) &&
                            int.TryParse(input[2], out check))
                        {
                            Console.WriteLine("The index does not exist!");
                        }
                        else
                            Console.WriteLine("The variable is not in the correct format!");
                    }
                    else
                    {
                        int check;
                        if (int.TryParse(input[1], out check))
                        {
                            Console.WriteLine("The index does not exist!");
                        }
                        else
                            Console.WriteLine("The variable is not in the correct format!");
                    }

                    countExceptions++;
                }
            }

            Console.WriteLine(string.Join(", ",numbers));
        }
    }
}
