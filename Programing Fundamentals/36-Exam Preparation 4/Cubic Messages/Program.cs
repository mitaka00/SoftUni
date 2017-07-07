using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Cubic_s_Messages
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();
          
            while(input!="Over!")
            {
                var number = int.Parse(Console.ReadLine());
                var pattern = @"^(?<leftPart>\d+)(?<message>[a-zA-Z]+)(?<rightPart>[^a-zA-Z]*)$";
                var messageRegex = new Regex(pattern);

                var matchedInput = messageRegex.Match(input);

                if(!matchedInput.Success)
                {
                    input = Console.ReadLine();
                    continue;
                }

                var leftPart = matchedInput.Groups["leftPart"].Value;
                var message = matchedInput.Groups["message"].Value;
                var rightPart = matchedInput.Groups["rightPart"].Value;

                if(message.Length!=number)
                {
                    input = Console.ReadLine();
                    continue;
                }

                var verificationCode = (leftPart + rightPart).Where(char.IsDigit)
                    .Select(x=>int.Parse(x.ToString())).ToArray();

                var result = message + " == ";
                for (int i = 0; i < verificationCode.Length; i++)
                {
                    if(verificationCode[i]>=message.Length)
                    {
                        result += " ";
                    }
                    else
                    {
                        result += message[verificationCode[i]];
                    }
                }

                Console.WriteLine(result);

                input = Console.ReadLine();
            }
        }
    }
}
