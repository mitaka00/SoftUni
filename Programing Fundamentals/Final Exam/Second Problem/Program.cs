using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.Globalization;

namespace Second_Problem
{
    class Program
    {
        static void Main(string[] args)
        {
            var pokemons = Console.ReadLine().Split().Select(int.Parse).ToList();
            var result = 0;

            while (pokemons.Any())
            {
                var index = int.Parse(Console.ReadLine());
                if (index <= 0)
                {
                    if (index == 0)
                    {
                        result += pokemons[0];
                        pokemons.RemoveAt(0);
                    }
                    else
                    {
                        for (int i = 1; i < pokemons.Count; i++)
                        {
                            if (pokemons[i] <= pokemons[0])
                            {
                                pokemons[i] += pokemons[0];
                            }
                            else
                            {
                                pokemons[i] += pokemons[0];
                            }
                        }

                        result += pokemons[0];
                        pokemons.RemoveAt(0);
                        pokemons.Insert(0, pokemons[pokemons.Count - 1]);
                    }
                }
                else if (index >= pokemons.Count - 1)
                {
                    for (int i = 0; i < pokemons.Count-1; i++)
                    {
                        if(pokemons[i]<=pokemons[pokemons.Count-1])
                        {
                            pokemons[i] += pokemons[pokemons.Count - 1];
                        }
                        else
                        {
                            pokemons[i] -= pokemons[pokemons.Count - 1];
                        }
                    }
                    result += pokemons[pokemons.Count - 1];
                    pokemons.RemoveAt(pokemons.Count - 1);
                    pokemons.Add(pokemons[0]);
                    
                }
                else
                {
                   
                        for (int i = 0; i < index; i++)
                        {
                            if (pokemons[i] <= pokemons[index])
                            {
                                pokemons[i] += pokemons[index];
                            }
                            else
                            {
                                pokemons[i] -= pokemons[index];
                            }
                        }
                        for (int i = index + 1; i < pokemons.Count; i++)
                        {
                            if (pokemons[i] <= pokemons[index])
                            {
                                pokemons[i] += pokemons[index];
                            }
                            else
                            {
                                pokemons[i] -= pokemons[index];
                            }
                        }
                        result += pokemons[index];
                        pokemons.RemoveAt(index);
                    
                }
                Console.WriteLine(string.Join(", ",pokemons));
            }
        Console.WriteLine(result);
            
            }
        }
    }
