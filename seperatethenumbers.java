import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class seperatethenumbers {
    public static boolean find(String s, String first) {
        if(s == null)
            return true;
        if(s.length() == 0)
            return true;
        String next = Long.toString(Long.parseLong(first) + 1); 
        if(s.startsWith(next))
            return find(s.substring(next.length()), next);
        return false;
    }
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int q = in.nextInt();
        for(int a0 = 0; a0 < q; a0++){
            String s = in.next();
            boolean flag = false;
            // your code goes here
            for(int i=1;i<=s.length()/2;i++){
                String first = s.substring(0, i);
                if(find(s.substring(i), first)){
                    flag = true;
                    System.out.println("YES " + first);
                    break;
                }
            }
            if(!flag)
                System.out.println("NO");
        }
    }
}

