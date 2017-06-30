using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Average_Grades
{
    class Students
    {
        public string Name { get; set; }
        public List<double> Grades { get; set; }
        public double AverageGrade //=>Greades.Average();
        {
            get
            {
                return Grades.Average();
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            var students =new List<Students>();

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine().Split();

                var name = input.First(); //input[0];
                var grades = input.Skip(1).Select(double.Parse).ToList();

                var student = new Students()
                {
                    Name=name,
                    Grades=grades
                };
                students.Add(student);
            }

            students = students
                .Where(x => x.AverageGrade>=5.00)
                .OrderBy(x => x.Name)
                .ThenByDescending(x => x.AverageGrade)
                .ToList();

            foreach (var student in students)
            {
                 Console.WriteLine($"{student.Name} -> {student.AverageGrade:f2}"); 
            }  
        }
    }
}
