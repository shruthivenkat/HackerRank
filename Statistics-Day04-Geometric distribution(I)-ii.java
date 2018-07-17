import java.io.*;
import java.util.*;
public class Solution {

    public static void main(String[] args) {
        double p= (double)1/3;
        double q=1-p;
        double prob=0.0;
        for(int i=0;i<5;i++)
        {
            prob+= Math.pow(q,i) * p;      
        }
        System.out.printf("%.3f",prob);
    }
}