using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Third_Problem
{
    public class Evolution
    {
        public Evolution(string type, int index)
        {
            this.Type = type;
            this.Index = index;
        }
        public string Type { get; set; }
        public int Index { get; set; }
    }
}



namespace Third_Problem
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Program
    {
        public static void Main()
        {
            var pokemonsData = new Dictionary<string, List<Evolution>>();
            var input = Console.ReadLine();
            while (input != "wubbalubbadubdub")
            {
                var tokens = input.Split(new string[] { " -> " }, StringSplitOptions.RemoveEmptyEntries);

                var pokemonName = tokens[0];

                if (tokens.Length == 1)
                {
                    PrintPokemonsData(pokemonsData, pokemonName);
                }

                else
                {
                    var evolutionType = tokens[1];
                    var evolutionIndex = int.Parse(tokens[2]);

                    if (!pokemonsData.ContainsKey(pokemonName))
                    {
                        pokemonsData[pokemonName] = new List<Evolution>();
                    }

                    var evolutionData = new Evolution(evolutionType, evolutionIndex);
                    pokemonsData[pokemonName].Add(evolutionData);
                }

                input = Console.ReadLine();
            }

            PrintResult(pokemonsData);
        }

        public static void PrintResult(Dictionary<string, List<Evolution>> pokemonsData)
        {
            foreach (var pokemon in pokemonsData)
            {
                Console.WriteLine($"# {pokemon.Key}");

                foreach (var evolution in pokemon.Value.OrderByDescending(x => x.Index))
                {
                    Console.WriteLine($"{evolution.Type} -> {evolution.Index}");
                }
            }
        }

        public static void PrintPokemonsData(Dictionary<string, List<Evolution>> pokemonsData, string pokemonName)
        {
            foreach (var pokemon in pokemonsData.Where(x => x.Key == pokemonName))
            {
                Console.WriteLine($"# {pokemon.Key}");

                foreach (var evolution in pokemon.Value)
                {
                    Console.WriteLine($"{evolution.Type} -> {evolution.Index}");
                }
            }
        }
    }
}