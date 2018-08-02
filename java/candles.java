import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

 public static void main(String args[]){
     int n,i,high=0;
     int count=0;
     Scanner sc=new Scanner(System.in);
     n=sc.nextInt();
     int a[]=new int[n];
     for(i=0;i<n;i++)
     {
         a[i]=sc.nextInt();
         if(a[i]>high) high=a[i];
         
     }
     for(i=0;i<n;i++)
     {
         if(high==a[i]) count++;
     }
     System.out.println(count);
 }
}
