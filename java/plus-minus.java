import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
public class solution {
       public static void main(String[] args) {
           Scanner in = new Scanner(System.in);
           int n = in.nextInt();
           double a=0,b=0,c=0; 
           int arr[] = new int[n];
           for(int arr_i=0; arr_i < n; arr_i++)
           { 
               arr[arr_i] = in.nextInt();
           }

    for(int arr_i=0; arr_i < n; arr_i++){
        if (arr[arr_i]>0)
            {a++;}
            else if (arr[arr_i]<0){b++;}
           else if (arr[arr_i]==0){c++;}

    }
    System.out.println(a/n);
        System.out.println(b/n);
        System.out.println(c/n);
}
}