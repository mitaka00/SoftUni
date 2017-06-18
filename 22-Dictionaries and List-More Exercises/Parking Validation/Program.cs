using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Parking_Validation
{
    class Program
    {
        static void Main(string[] args)
        {
            var numberComands = int.Parse(Console.ReadLine());

            var inPut = new List<string>();
            var registeredUsers = new Dictionary<string, string>();

            for (int i = 0; i < numberComands; i++)
            {
                inPut = Console.ReadLine().Split().ToList();

                var command = inPut[0];
                var username = inPut[1];
                
                if(command=="register")
                {
                    var license = inPut[2];

                    if (registeredUsers.ContainsKey(username))
                    {
                        Console.WriteLine(
                            "ERROR: already registered with plate number {0} "
                            ,registeredUsers[username]);
                    }

                    else if(!LicenseResult(license))
                    {
                        Console.WriteLine($"ERROR: invalid license plate {license}");
                    }
                    else if(registeredUsers.ContainsValue(license))
                    {
                        Console.WriteLine($"ERROR: license plate {license} is busy");
                    }
                    else
                    {
                        registeredUsers[username] = license;
                        Console.WriteLine($"{username} registered {license} successfully");
                    }
                }
                else if(command=="unregister")
                {
                    if(!registeredUsers.ContainsKey(username))
                    {
                        Console.WriteLine($"ERROR: user {username} not found");
                    }
                    else
                    {
                        registeredUsers.Remove(username);
                        Console.WriteLine($"user {username} unregistered successfully");
                    }
                }
            }

            foreach (var username in registeredUsers)
            {
                Console.WriteLine($"{username.Key} => {username.Value}");
            }
        }

        static bool LicenseResult(string license)
        {
            if(license.Length==8 
                && license.Take(2).All(char.IsUpper) 
                && license.Skip(6).Take(2).All(char.IsUpper)
                && license.Skip(2).Take(4).All(char.IsNumber))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
