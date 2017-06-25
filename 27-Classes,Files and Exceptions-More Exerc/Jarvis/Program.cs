using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jarvis
{
    class Program
    {
        class Arms
        {
            public int EnergyConsumption { get; set; }
            public int ReachDistance { get; set; }
            public int CountOfFingers { get; set; }
        }
        class Legs
        {
            public int EnergyConsumption { get; set; }
            public int Strength { get; set; }
            public int Speed { get; set; }
        }
        class Torso
        {
            public int EnergyConsumption { get; set; }
            public double ProcessorSize { get; set; }
            public string HousingMaterial { get; set; }
        }
        class Head
        {
            public int EnergyConsumption { get; set; }
            public int IQ { get; set; }
            public string SkinMaterial { get; set; }
        }
        static void Main(string[] args)
        {
            var MaxEnergyCapacity = long.Parse(Console.ReadLine());

            var command = Console.ReadLine();

            var finalLegComponents = new List<Legs>();
            var finalHeadComponents = new Head();
            finalHeadComponents.EnergyConsumption = int.MaxValue;
            var finalTorsoComponents = new Torso();
            finalTorsoComponents.EnergyConsumption = int.MaxValue;
            var finalArmComponents = new List<Arms>();
    
            while(command!="Assemble!")
            {
                var commandParts = command.Split().ToList();

                var typeOfComponent = commandParts[0];
                var energyConsumption = commandParts[1];
                var firstProperty = commandParts[2];
                var secondProperty = commandParts[3];

                if (typeOfComponent == "Arm")
                {
                    var armComponents = FindArmsComponents(typeOfComponent, energyConsumption, firstProperty, secondProperty);

                    if (finalArmComponents.Count < 2)
                    {
                        finalArmComponents.Add(armComponents);
                    }
                    else
                    {
                        for (int i = 0; i < finalArmComponents.Count; i++)
                        {
                            if (finalArmComponents[i].EnergyConsumption > armComponents.EnergyConsumption)
                            {
                                finalArmComponents.RemoveAt(i);
                                finalArmComponents.Add(armComponents);
                            }
                        }
                    }
                }

                else if (typeOfComponent == "Leg")
                {
                    var legsComponents = FindLegComponents(typeOfComponent, energyConsumption, firstProperty, secondProperty);


                    if (finalLegComponents.Count < 2)
                    {
                        finalLegComponents.Add(legsComponents);
                    }
                    else
                    {
                        for (int i = 0; i < finalLegComponents.Count; i++)
                        {
                            if (finalLegComponents[i].EnergyConsumption > legsComponents.EnergyConsumption)
                            {
                                finalLegComponents.RemoveAt(i);
                                finalLegComponents.Add(legsComponents);
                            }
                        }
                    }
                }

                else if (typeOfComponent == "Head")
                {
                    var headComponents = FindHeadComponents(typeOfComponent, energyConsumption, firstProperty, secondProperty);

                    if (finalHeadComponents.EnergyConsumption > headComponents.EnergyConsumption)
                    {
                        finalHeadComponents = headComponents;
                    }
                }

                else if (typeOfComponent == "Torso")
                {
                    var torsoComponents = FindTorsoComponents(typeOfComponent, energyConsumption, firstProperty, secondProperty);

                    if (finalTorsoComponents.EnergyConsumption > torsoComponents.EnergyConsumption)
                    {
                        finalTorsoComponents = torsoComponents;
                    }
                }

                command = Console.ReadLine();
            }

            if (finalArmComponents.Count < 2 || finalHeadComponents.EnergyConsumption == int.MaxValue
                || finalLegComponents.Count < 2 || finalTorsoComponents.EnergyConsumption == int.MaxValue)
            {
                Console.WriteLine("We need more parts!");
            }

            else if (finalTorsoComponents.EnergyConsumption + finalLegComponents[0].EnergyConsumption
               + finalLegComponents[1].EnergyConsumption
               + finalHeadComponents.EnergyConsumption
               + finalArmComponents[0].EnergyConsumption
               + finalArmComponents[1].EnergyConsumption > MaxEnergyCapacity)
            {
                Console.WriteLine("We need more power!");
                return;
            }

            else

                finalOutput(finalHeadComponents, finalArmComponents, finalLegComponents, finalTorsoComponents);
          
        }

        private static void finalOutput(Head finalHeadComponents, List<Arms> finalArmComponents, List<Legs> finalLegComponents, Torso finalTorsoComponents)
        {
            Console.WriteLine("Jarvis:");
            Console.WriteLine("#Head:");
            Console.WriteLine("###Energy consumption: {0}", finalHeadComponents.EnergyConsumption);
            Console.WriteLine("###IQ: {0}", finalHeadComponents.IQ);
            Console.WriteLine("###Skin material: {0}", finalHeadComponents.SkinMaterial);

            Console.WriteLine("#Torso:");
            Console.WriteLine("###Energy consumption: {0}", finalTorsoComponents.EnergyConsumption);
            Console.WriteLine("###Processor size: {0:f1}", finalTorsoComponents.ProcessorSize);
            Console.WriteLine("###Corpus material: {0}", finalTorsoComponents.HousingMaterial);

            foreach (var item in finalArmComponents.OrderBy(a => a.EnergyConsumption))
            {
                Console.WriteLine($"#Arm:\n###Energy consumption: {item.EnergyConsumption}\n###Reach: " +
               $"{item.ReachDistance}\n###Fingers: {item.CountOfFingers}");
            }

            foreach (var item in finalLegComponents.OrderBy(a => a.EnergyConsumption))
            {
                Console.WriteLine($"#Leg:\n###Energy consumption: {item.EnergyConsumption}\n###Strength: " +
                $"{item.Strength}\n###Speed: {item.Speed}");
            }
        }

        static Torso FindTorsoComponents(string typeOfComponent, string energyConsumption, string firstProperty, string secondProperty)
        {
            var torsoComponents = new Torso
            {
                EnergyConsumption = int.Parse(energyConsumption),
                ProcessorSize = double.Parse(firstProperty),
                HousingMaterial = secondProperty
            };

            return torsoComponents;
        }

        static Head FindHeadComponents(string typeOfComponent, string energyConsumption, string firstProperty, string secondProperty)
        {
            var headComponents = new Head
            {
                EnergyConsumption = int.Parse(energyConsumption),
                IQ = int.Parse(firstProperty),
                SkinMaterial = secondProperty
            };

            return headComponents;
        }

        static Legs FindLegComponents(string typeOfComponent, string energyConsumption, string firstProperty, string secondProperty)
        {
            var legsComponents = new Legs
            {
                EnergyConsumption = int.Parse(energyConsumption),
                Strength = int.Parse(firstProperty),
                Speed = int.Parse(secondProperty)
            };

            return legsComponents;
        }

        static Arms FindArmsComponents(string typeOfComponent, string energyConsumption, string firstProperty, string secondProperty)
        {
            var armsComponents = new Arms
            {
                EnergyConsumption = int.Parse(energyConsumption),
                ReachDistance = int.Parse(firstProperty),
                CountOfFingers = int.Parse(secondProperty)
            };

            return armsComponents;
        }
    }
}
