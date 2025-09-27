import java.util.*;

public class PalindromicSubsequences {
    
    public static int maxPalindromicSubsequences(String s) {
       int freq[] = new int[26];
       for(char c : s.toCharArray()){
              freq[c - 'a']++;
       }

         int oddCount = 0;
            for(int count : freq){
                if(count % 2 != 0){
                        oddCount++;
                }
            }
    }

    public static void main(String[] args) {
        String s = "aaa";
        int result = maxPalindromicSubsequences(s);
        System.out.println("Maximum palindromic subsequences: " + result);
    }
}
