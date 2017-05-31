using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vapor_Store
{
    class Program
    {
        static void Main(string[] args)
        {
            var currentBalance = double.Parse(Console.ReadLine());
            var maxBalance = currentBalance;
            var game = string.Empty;
            for (int i = 0;i<99999999999999; i ++)
            {
                game = Console.ReadLine();

                if (game == "OutFall 4")
                {
                    if (currentBalance >= 39.99)
                    {
                        currentBalance -= 39.99;
                        if (currentBalance == 0)
                        {
                            Console.WriteLine("Bought OutFall 4");
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        Console.WriteLine("Bought OutFall 4");
                    }
                    else
                    {
                        Console.WriteLine("Too Expensive");
                    }
                  
                }
                else if (game == "CS: OG")
                {
                    if (currentBalance >= 15.99)
                    {
                        currentBalance -= 15.99;
                        if (currentBalance == 0)
                        {
                            Console.WriteLine("Bought CS: OG");
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        Console.WriteLine("Bought CS: OG");
                    }
                    else
                    {
                        Console.WriteLine("Too Expensive");
                    }
                }
                else if (game == "Zplinter Zell")
                {
                    if (currentBalance >= 19.99)
                    {
                        currentBalance -= 19.99;
                        if (currentBalance == 0)
                        {
                            Console.WriteLine("Bought Zplinter Zell");
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        Console.WriteLine("Bought Zplinter Zell");
                    }
                    else
                    {
                        Console.WriteLine("Too Expansive");
                    }
                }
                else if (game == "Honored 2")
                {
                    if (currentBalance >= 59.99)
                    {
                        currentBalance -= 59.99;
                        if (currentBalance == 0)
                        {
                            Console.WriteLine("Bought Honored 2");
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        Console.WriteLine("Bought Honored 2");
                    }
                    else
                    {
                        Console.WriteLine("Too expensive");
                    }
                }
                else if (game == "RoverWatch")
                {
                    if (currentBalance >= 29.99)
                    {
                        currentBalance -= 29.99;
                        if (currentBalance == 0)
                        {
                            Console.WriteLine("Bought RoverWatch");
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        Console.WriteLine("Bought RoverWatch");
                    }
                    else
                    {
                        Console.WriteLine("Too Expensive");
                    }
                }

                else if (game == "RoverWatch Origins Edition")
                {
                    if (currentBalance >= 39.99)
                    {
                        currentBalance -= 39.99;
                        if (currentBalance == 0)
                        {
                            Console.WriteLine("Bought RoverWatch Origins Edition");
                            Console.WriteLine("Out of money!");
                            return;
                        }
                        Console.WriteLine("Bought RoverWatch Origins Edition");
                    }
                    else
                    {
                        Console.WriteLine("Too Expensive");
                    }
                }
                else if(game=="Game Time")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Not Found");
                }
            }
            Console.WriteLine($"Total spent: ${maxBalance-currentBalance:f2}. Remaining: ${currentBalance:f2}");
        }
    }
}
