using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoftUni_Karaoke
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> participants = Console.ReadLine()
                .Split(new char[] { ',' },StringSplitOptions.RemoveEmptyEntries).Select(x => x.Trim()).ToList();
            List<string> availableSongs = Console.ReadLine()
                .Split(new char[] { ',' },StringSplitOptions.RemoveEmptyEntries).Select(x=>x.Trim()).ToList();

            var command = Console.ReadLine();

            var results = new Dictionary<string,List<string>>();

            while(command!="dawn")
            {
                var commandInfo = command
                    .Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(x => x.Trim()).ToList();

                var participant = commandInfo[0];
                var song = commandInfo[1];
                var award = commandInfo[2];

               if(!participants.Contains(participant) || !availableSongs.Contains(song))
                {
                    command = Console.ReadLine();
                    continue;
                }

               if(!results.Keys.Contains(participant))
                {
                    results[participant] = new List<string>();
                }

               if(results[participant].Contains(award))
                {
                    command = Console.ReadLine();
                    continue;
                }

                results[participant].Add(award);

                command = Console.ReadLine();
            }

            if(results.Count==0)
            {
                Console.WriteLine("No awards");
            }
            else
            {
                foreach (var result in results.OrderByDescending(x => x.Value.Count()).ThenBy(x => x.Key))
                {
                    Console.WriteLine($"{result.Key}: {result.Value.Count} awards");
                    foreach (var award in result.Value.OrderBy(x => x))
                    {
                        Console.WriteLine($"--{award}");
                    }
                }
            }
        }
    }
}
