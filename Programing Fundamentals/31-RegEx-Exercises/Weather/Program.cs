using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Weather
{
    class Program
    {
        class WeatherInfo
        {
            public double Temperature { get; set; }
            public string Weather { get; set; }
        }
        static void Main(string[] args)
        {
            var regex = new Regex(@"(?<city>[A-Z]{2})(?<temp>\d+\.\d+)(?<weather>[a-zA-z]+)\|");

            var cities = new Dictionary<string, WeatherInfo>();

            var line = Console.ReadLine();

            while(line!="end")
            {
                var weatherMatch = regex.Match(line);

                if(weatherMatch.Success)
                {
                    var city = weatherMatch.Groups["city"].Value;
                    var temp = double.Parse(weatherMatch.Groups["temp"].Value);
                    var weather = weatherMatch.Groups["weather"].Value;

                    var weatherInfo = new WeatherInfo()
                    {
                        Temperature = temp,
                        Weather=weather
                    };

                    cities[city] = weatherInfo;
                }

                line = Console.ReadLine();
            }

            foreach (var city in cities.OrderBy(x=>x.Value.Temperature))
            {
                var cityName = city.Key;
                var cityTemp = city.Value.Temperature;
                var cityWeather = city.Value.Weather;

                Console.WriteLine($"{cityName} => {cityTemp:f2} => {cityWeather}");
            }
        }
    }
}
