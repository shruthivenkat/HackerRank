//https://www.hackerrank.com/challenges/simple-array-sum/problem

import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {
    public static void main(String args[]){
        Scanner sc =new Scanner(System.in);
        int n,sum=0;
        n=sc.nextInt();
        int i;
        int a[]=new int[n];
        for(i=0;i<n;i++)
        {
            a[i]=sc.nextInt();
        }
        for(i=0;i<n;i++)
        {
            sum+=a[i];
        }
        System.out.println(sum);
    }
}