
public class MainClass {

	public static int recursiveFunction(int n) {
		// if in the recursion stack, when number is equal to 1, it returns and pops the solution in 
		// asending order    
		if (n == 1) {    
		    return 1; 
		}
		int number = recursiveFunction(n / 2);
		if(number!=1) {
			System.out.println(number);
		}
		return n; 
	}
	
	public static void main(String[] args) {
		int number=9;
		// Calling the recursive function 
		int functionOuput=recursiveFunction(number);
		if(functionOuput!=1) {
		// Printing the value recursive value
			System.out.println(functionOuput);
		}
	}

}
