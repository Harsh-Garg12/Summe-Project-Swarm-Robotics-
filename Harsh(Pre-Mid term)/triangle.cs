using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment2
{
    class Vector
    {
        public double x;
        public double y;
    


        public Vector(double X, double Y)
        {
            x = X; y = Y;
        }

     }
    class Region
    {

        // constructor of Class vector
        public double Trgarea(Vector A, Vector B, Vector C)
       {
           double Area = 0.5*(Math.Abs(A.x*(B.y-C.y)+B.x*(C.y-A.y)+C.x*(A.y-B.y)));
           return Area;
       }


    }

    class Program
    {
        static void Main(string[] args)
        {
            //Decleration of objects of class vector 

            Vector A = new Vector(Convert.ToInt32(Console.ReadLine()),Convert.ToInt32(Console.ReadLine()));
            Vector B = new Vector(Convert.ToInt32(Console.ReadLine()),Convert.ToInt32(Console.ReadLine()));
            Vector C = new Vector(Convert.ToInt32(Console.ReadLine()), Convert.ToInt32(Console.ReadLine()));

            // point that need to be check


            Vector P = new Vector(Convert.ToInt32(Console.ReadLine()), Convert.ToInt32(Console.ReadLine()));

            Region Atrg= new Region();
            double ABC = Atrg.Trgarea(A,B,C);

            if (ABC > 0)
            {
                double PAB = Atrg.Trgarea(P,A,B);
                double PBC = Atrg.Trgarea(P, B, C);
                double PAC = Atrg.Trgarea(P, A, C);

                if (((PAB + PBC + PAC) - ABC) < 0.0001)
                {
                    Console.WriteLine("True");
                    Console.ReadLine();
                }
                else
                {
                    Console.WriteLine("False");
                    Console.ReadLine();

                }
            }

        

        }

    }

}
