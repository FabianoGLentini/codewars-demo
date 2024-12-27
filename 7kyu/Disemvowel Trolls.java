// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// My Java Solution

public class Troll {
    public static String disemvowel(String str) {
      String strnew = str.replaceAll("([aeiouAEIOU])", "");
      return strnew ;
    }
}

// Code Wars Alternatives

public class Troll {
    public static String disemvowel(String Z) {
        return Z.replaceAll("(?i)[aeiou]" , "");
    }
}

// Or

public class Troll {
  public static String disemvowel(String str) {
      return str.replaceAll("[aAeEiIoOuU]", "");
  } 
}