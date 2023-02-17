import java.util.*;

public class MainClass {

	public static void main(String[] args) {
    String[] name = {"apple","pie","apple","red","red","red"};

    Set<String> myset  = new HashSet<String>();
    Collections.addAll(myset,name);

    Object[] abc=myset.toArray();
    
    System.out.println( myset.toString());
    int countIndex[]=new int [abc.length];
    
    for(int k=0;k<countIndex.length;k++) {
    	countIndex[k]=0;
    }
    
    for(int i=0;i<abc.length;i++) {
    	
    	for(int j=0;j<name.length;j++) {
    		if(abc[i]==name[j]) {
    			countIndex[i]++;
    		}
    	}
    	
    	System.out.println(abc[i]);
    }

    int maxIndex = 0;
    for (int i = 0; i < abc.length; i++) {
        if (countIndex[i] > countIndex[maxIndex]) {
            maxIndex = i;
        }
    }
    System.out.println(abc[maxIndex]);
    
	}

}
