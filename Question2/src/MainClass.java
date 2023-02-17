
public class MainClass {

	public static void recursiveFunction(int number){
		
		if(number==1||number==0) {
			System.out.println(number);
			
		}
		else {
			int num=number/2;
			
			System.out.println(num);
			
			recursiveFunction(num);
		}
		
	}
	public static int recursiveFunc(int n) {
		   if (n == 1) {    
		      return 1; 
		   }
		   int number = recursiveFunc(n / 2);
		   if(number!=1) {
			   System.out.println(number);
		   }
		   
			   return n; 
		}
	
	public static void main(String[] args) {
		
		int functionOuput=recursiveFunc(9);
		if(functionOuput!=1) {
			System.out.println(functionOuput);
		}
	}

}
