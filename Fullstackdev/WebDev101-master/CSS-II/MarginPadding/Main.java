//the sky is blue
//blue is the sky


// Given a string A of size N.

// Return the string A after reversing the string word by word.

// NOTE:

// A sequence of non-space characters constitutes a word.
// Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
// If there are multiple spaces between words, reduce them to a single space in the reversed string.
import java.util.*;

class Main{
    public static void main(String args[]){
        String s = "the sky is blue";
        String[] answer = new String[s.length()];
        int j=0;
        String word = "";
        for(int i=0;i<s.length();i++){
            if((s.charAt(i))==' '){
                answer[j] = word ;
                j++;
               // System.out.println(word);
                word = "";
            } 
            else{
                word += s.charAt(i); 
            }
           
        }
        //System.out.println(word);
        
        answer[j] = word;
        j++;
        s="";
        for(int k =j-1;k>=0;k--){
                 s += answer[k] + " ";
         }

        System.out.println(s);

    
    }

    // public String reverse1(String arr[]){
    //     String s;
    //     for(int i=0;i<arr.length();i++){

    //     }


    //     return s;
    // }
}
