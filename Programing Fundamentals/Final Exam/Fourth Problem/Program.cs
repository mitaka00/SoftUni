using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.Globalization;

namespace Fourth_Problem
{
    class Program
    {
        class Pokemons
        {
            public string EvolutionType { get; set; }
            public int Index { get; set; }
        }
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var pokemonsEvolutions = new Dictionary<string,List <Pokemons>>();

            while(input!= "wubbalubbadubdub")
            {
                var inputParts = input.Split(new char[] { '-', ' ', '>' }, StringSplitOptions.RemoveEmptyEntries).ToList();

                if(inputParts.Count==1)
                {
                    if(pokemonsEvolutions.ContainsKey(inputParts[0]))
                    {
                        Console.WriteLine($"# {inputParts[0]}");
                        foreach (var evolution in pokemonsEvolutions[inputParts[0]])
                        {
                            Console.WriteLine($"{evolution.EvolutionType} <-> {evolution.Index}");
                        }
                    }
                    
                }
                else
                {
                    var name = inputParts[0];
                    var evolutionType = inputParts[1];
                    var index = int.Parse(inputParts[2]);

                    var pokemInfo = new Pokemons()
                    {
                        EvolutionType = evolutionType,
                        Index = index
                    };

                    if (!pokemonsEvolutions.ContainsKey(name))
                    {
                        pokemonsEvolutions[name] = new List<Pokemons>();
                    }

                    pokemonsEvolutions[name].Add(pokemInfo);
                }

                input = Console.ReadLine();
            }

            foreach (var pokemon in pokemonsEvolutions)
            {
                Console.WriteLine($"# {pokemon.Key}");
                foreach (var pokemonInfo in pokemon.Value.OrderByDescending(x=>x.Index))
                {
                    Console.WriteLine($"{pokemonInfo.EvolutionType} <-> {pokemonInfo.Index}");
                }
            }
        }
    }
}
