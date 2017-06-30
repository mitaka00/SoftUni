using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vehicle_Catalogue
{
    class Program
    {
        class Vehicle
        {
            public string Type { get; set; }
            public string Model { get; set; }
            public string Color { get; set; }
            public int HorsePower { get; set; }
        }
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            var vehicles = new List<Vehicle>();

            while(input!="End")
            {
                var vehicleInfo = input.Split().ToArray();

                var type = vehicleInfo[0];
                var model = vehicleInfo[1];
                var color = vehicleInfo[2];
                var horsePower = int.Parse(vehicleInfo[3]);

                var vehicle = new Vehicle
                {
                    Type = type,
                    Model = model,
                    Color = color,
                    HorsePower = horsePower
                };

                vehicles.Add(vehicle);

                input = Console.ReadLine();
            }

            var inputModel = Console.ReadLine();

            var averageCarsHorsePower = 0.0;
            var countCars = 0;
            var averageTrucksHorsePower = 0.0;
            var countTrucks = 0;

            while(inputModel!="Close the Catalogue")
            {
                foreach (var vehicle in vehicles)
                {
                    if(vehicle.Type.ToLower()=="car")
                    {
                        vehicle.Type = "Car";
                        averageCarsHorsePower += vehicle.HorsePower;
                        countCars++;
                    }
                    else
                    {
                        vehicle.Type = "Truck";
                        averageTrucksHorsePower += vehicle.HorsePower;
                        countTrucks++;
                    }

                    if(vehicle.Model==inputModel)
                    {
                        Console.WriteLine("Type: {0}",vehicle.Type);
                        Console.WriteLine("Model: {0}",vehicle.Model);
                        Console.WriteLine("Color: {0}",vehicle.Color);
                        Console.WriteLine("Horsepower: {0}",vehicle.HorsePower);
                    }
                }

                inputModel = Console.ReadLine();
            }

            FindCarAndTruckHorsePower(countCars, countTrucks,averageCarsHorsePower,averageTrucksHorsePower);
          
        }

        static void FindCarAndTruckHorsePower(
            int countCars, int countTrucks,double averageCarsHorsePower,double averageTrucksHorsePower)
        {
            if (countCars == 0)
            {
                Console.WriteLine($"Cars have average horsepower of: 0.00.");
            }
            else
            {
                Console.WriteLine($"Cars have average horsepower of: {averageCarsHorsePower / countCars:f2}.");
            }

            if (countTrucks == 0)
            {
                Console.WriteLine($"Trucks have average horsepower of: 0.00.");
            }
            else
            {
                Console.WriteLine($"Trucks have average horsepower of: {averageTrucksHorsePower / countTrucks:f2}.");
            }
        }
    }
}
