using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Nether_Realms
{
    class Program
    {
        class Demon
        {
            public string Name { get; set; }
            public int Health
            {
                get
                {
                    var health = 0;
                    for (int i = 0; i < Name.Length; i++)
                    {
                        if(!(Name[i]>=48 && Name[i]<=57) && Name[i]!='+' 
                            && Name[i] != '-' && Name[i] != '.' && Name[i] != '/' 
                            && Name[i] != '*')
                        {
                            health += Name[i];
                        }
                    }

                    return health;
                }
            }
            public double Damage
            {
                get
                {
                    var damage = 0.0;
                    var regex = new Regex(@"[-+]?\d+\.?\d*");

                    var matchedNumbers = regex.Matches(Name);


                    foreach (Match number in matchedNumbers)
                    {
                        damage += double.Parse(number.ToString());
                    }

                    for (int i = 0; i < Name.Length; i++)
                    {
                        if (Name[i] == '*')
                        {
                            damage *= 2;
                        }
                        if (Name[i] == '/')
                        {
                            damage /= 2;
                        }
                    }
             
                    return damage;
                }
            }
        }
        static void Main(string[] args)
        {
            var demons = Console.ReadLine()
                .Split(new char[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(x=>x.Trim()).ToList();

            var demonsInfo = new List<Demon>();

            foreach (var demon in demons)
            {
                var demonInfo = new Demon()
                {
                    Name = demon
                };

                demonsInfo.Add(demonInfo);
            }

            foreach (var demon in demonsInfo.OrderBy(d=>d.Name))
            {
                Console.WriteLine($"{demon.Name} - {demon.Health} health, {demon.Damage:f2} damage");
            }
        }
    }
}
