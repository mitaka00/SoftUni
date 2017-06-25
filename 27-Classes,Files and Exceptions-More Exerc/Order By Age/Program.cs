using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Order_By_Age
{
    class Program
    {
        class Person
        {
            public string Name { get; set; }
            public string ID { get; set; }
            public int Age { get; set; }
        }
        static void Main(string[] args)
        {
            var person = Console.ReadLine();

            var PersonsInfo = new List<Person>();

            while(person!="End")
            {
               var personInfo= person.Split().ToList();

                var name = personInfo[0];
                var id = personInfo[1];
                var age = int.Parse(personInfo[2]);

                var Person=new Person()
                {
                    Name = name,
                    ID = id,
                    Age = age
                };

                PersonsInfo.Add(Person);

                person = Console.ReadLine();
            }

            foreach (var Person in PersonsInfo.OrderBy(x=> x.Age))
            {
                Console.WriteLine($"{Person.Name} with ID: {Person.ID} is {Person.Age} years old.");
            }
        }
    }
}
