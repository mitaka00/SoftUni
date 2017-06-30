using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Advertisment_Message
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var random = new Random();

            var phrase = new List<string>()
            {
                "Excellent product.",
                "Such a great product.",
                "I always use that product.",
                "Best product of its category.",
                "Exceptional product.",
                "I can’t live without this product."
            };

            var events = new List<string>()
            {
                "Now I feel good.",
                "I have succeeded with this product.",
                "Makes miracles. I am happy of the results!",
                "I cannot believe but now I feel awesome.",
                "Try it yourself, I am very satisfied.",
                "I feel great!"
            };

            var authors = new List<string>()
            {
                "Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"
            };

            var cities = new List<string>()
            {
                "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"
            };

            for (int i = 0; i < n; i++)
            {
                var phraseIndex=random.Next(phrase.Count);
                var eventIndex = random.Next(events.Count);
                var auhtorIndex = random.Next(authors.Count);
                var citiesIndex = random.Next(cities.Count);

                Console.WriteLine(
                    $"{phrase[phraseIndex]} {events[eventIndex]} {authors[auhtorIndex]} - {cities[citiesIndex]}");
            }
        }
    }
}
