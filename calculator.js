const math =  require('./math.js');
let stdin = process.openStdin()
let i=1, a, b;

const main = () => {

	stdin.addListener("data",(value) =>{
		if(i == 1 ){
			a = value;
		}
		else if( i == 2){
			b = value;
			console.log('a:'+a+'b:'+b)
		}
		else if (i == 3 ) {
			//console.log('value: ' +  value)    check value have what thing ?? 
			if(value.toString().trim() == "/" ){
				i = math.div(a,b);
			    console.log('a' + value.toString().trim() + ' b = ' +'\n' +i )     // ______.toString().trim()  : cut \n
			}
			else if(value.toString().trim() == "+" ){
				i = math.add(a,b);
			    console.log('a' + value.toString().trim() + ' b = ' +'\n' +i )  
			}
			else if(value.toString().trim() == "*" ){
				i = math.mul(a,b);
			    console.log('a' + value.toString().trim() + ' b = '+'\n' + i)     
			}
			if(value.toString().trim() == "-" ){
				i = math.sub(a,b);
			    console.log('a' + value.toString().trim() + ' b = '+'\n' + i)    
			}

			stdin.destroy()
		}
	i++;
	})
} 

main()
