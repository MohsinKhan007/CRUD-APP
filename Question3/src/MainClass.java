import java.util.*;

public class MainClass {

	public static void main(String[] args) {
    String[] str1 = {"apple","pie","apple","red","red","red"};
    String[] str2 = {"abc","abc","efc","efc","mno","xyz","abc"};

    // Converting the String Array into Set to Remove the duplicate value for final display 
    Set<String> myset  = new HashSet<String>();
    Collections.addAll(myset,str2);

    // Converting the Set into object 
    Object[] mySetObjArray=myset.toArray();

    // getting the unique Count Array and declaring its by the length   
    int countIndex[]=new int [mySetObjArray.length];
    
    //Inicilizing the array values by 0
    for(int k=0;k<countIndex.length;k++) {
    	countIndex[k]=0;
    }
    
    //nested array to check which values were repeated how many time and storing it in the countIndex
    for(int i=0;i<mySetObjArray.length;i++) {
    	for(int j=0;j<str2.length;j++) {
    		if(mySetObjArray[i]==str2[j]) {
    			countIndex[i]++;
    		}
    	}
    }

    // getting the highest index values of them all
    int maxIndex = 0;
    for (int i = 0; i < mySetObjArray.length; i++) {
        if (countIndex[i] > countIndex[maxIndex]) {
            maxIndex = i;
        }
    }
    // Printing the MAX Repeated value
    System.out.println(mySetObjArray[maxIndex]+" Max repeated Value of Array");
    System.out.println();
    System.out.print("[");
    for( String value:str2){
        System.out.print(value+" ");
    }
    System.out.print("]");
	}

}
