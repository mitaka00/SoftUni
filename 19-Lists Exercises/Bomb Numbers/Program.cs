﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> seuqnce = Console.ReadLine().Split().Select(int.Parse).ToList();

            string[] intpit = Console.ReadLine().Split();

            int number = int.Parse(intpit[0]);
            int power = int.Parse(intpit[1]);

            for (int i = 0; i < seuqnce.Count; i++)
            {
                if (seuqnce[i] == number)
                {
                    int left = Math.Max(i - power, 0);

                    int right = Math.Min(i + power, seuqnce.Count - 1);

                    int lenght = right - left + 1;
                    seuqnce.RemoveRange(left, lenght);
                    i = 0;
                }
            }
            Console.WriteLine(seuqnce.Sum());
        }
    }
}
