using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fix_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            var dict = new Dictionary<string, string>();
            var name = string.Empty;
            var email = string.Empty;
            while (true)
            {
                name = Console.ReadLine();
                if (name == "stop")
                {
                    break;
                }
                email = Console.ReadLine();
                string ending = email.Substring(email.Length - 2, 2).ToLower();
                if(ending!="us" || ending!="uk")
                {
                    dict.Add(name,email);
                }
            }


            foreach (var item in dict)
            {
                Console.WriteLine($"{item.Key} -> {item.Value}");
            }
        }
    }
}
