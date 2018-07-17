import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
public class solution {
    double sum=0.0;
    double fact(int j)
    {
       if(j==0)
       return 1;
       return j*factorial(j-1);
        
    }
    double comb(int i)
    {
        sum=(fact(6))/(fact(i)*fact(6-i));
        return sum;
    }
    public static void main(String args[]) {
        public static final double BR= 1.09;
         public static final double GR= 1;
        double p=BR/(BR+GR);
        double q=1-p;
        int i;
        double result=0.0;
        for(i=0;i<6;i++)
        {
            result+=(comb(i)*pow(p,i)*pow(q,(6-i)));
        }
        System.out.println("%.3f",result);
    }
}