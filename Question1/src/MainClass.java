
import java.util.*;  
public class MainClass {
	public static String[] ArrayListToStringArray(List<String> arrayList) {
		
		String[] SortedString=new String[arrayList.size()] ;
		
		for(int i=0;i<arrayList.size();i++) {
			SortedString[i]=arrayList.get(i);
		}
		
		return SortedString;
	}

	public static String[] SortArrayByElement(String[] arr,char character) {
	    Map<String, Integer> counts = new HashMap<String, Integer>();
	    int count = 0;
	    // count the number of character in each word
	    for (String s : arr) {
	        count=0;
	        for (char c : s.toCharArray()) {
	            if (c == character) {
	                count++;
	            }
	        }
	        counts.put(s, count);
	    }

	    // sort by count
	    List<String> sortedList = new ArrayList<String>(counts.keySet());
	    sortedList.sort((s1, s2) -> {
	        int compVal = Integer.compare(counts.get(s2), counts.get(s1));
	        if (compVal == 0) {
	            
	            compVal = Integer.compare(s2.length(), s1.length());
	        }
	        // sort descending
	        return compVal;
	    });

	   return ArrayListToStringArray(sortedList);
	    
	}
	public static void main(String[] args) {
		// Delaring the String array for testing the function
		String[] str1=new String[]{"aaaasda", "a", "aab", "aaabcd", "ef", "cssssassd", "fdz", "kf", "zc","lklklklklklklklkl", "l"};
		String[] str2=new String[]{"aaaa","jnjn","yygyg","okok","pasccrc","jhbg","a","unubv","jjnajja"};
		// macthed Char to count in a String value
		char machtedString='a';
		// Declearing the Array by previous Array Length
		String[] sortedString=new String[str2.length];
		// Calling the Function
		sortedString=SortArrayByElement(str2,machtedString);
		
		// iterate over the array after the sorting
		for(String sortedStr:sortedString) {
			System.out.println(sortedStr);
		}
		
		 
	}
}
