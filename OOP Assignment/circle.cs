using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Centre_Radius
    {
        public double x,y,r; 
    //contructor
    public Centre_Radius(double X,double Y,double R)
    {
        x = X; y = Y; r = R;
    }
    }
    class Vector
    {
        public double x, y;
        public Vector(double X, double Y)
        {
            x = X; y = Y;
        }
    }
    class Circle
    {
        public string check(Vector P,Centre_Radius C)
        {
            if ((Math.Sqrt((P.x - C.x) * (P.x - C.x) + (P.y - C.y) * (P.y - C.y)) - C.r) <= 0.0001)
            {
                return "True";
            }
            else
            {
                return "False";
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Centre_Radius C = new Centre_Radius(Convert.ToDouble(Console.ReadLine()) , Convert.ToDouble(Console.ReadLine()),Convert.ToDouble(Console.ReadLine()));
            
            //Point That need to be check
            Vector P = new Vector(Convert.ToDouble(Console.ReadLine()), Convert.ToDouble(Console.ReadLine()));

            //object of class circle
            Circle mycircle = new Circle();

            if (mycircle.check(P, C) == "True")
            {
                Console.WriteLine("Yes");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("No");
                Console.ReadLine();
            }

        }
    }
}
