const math =  require('./math.js');
let stdin = process.openStdin()
let i=1, a ;

const main = () => {
	console.log('Baht(Th):')
	stdin.addListener("data",(value) =>{
		    if(i == 1){
			a = math.mul(value,0.032);
			console.log('Dollar(US):'+a+'Dollar')
			stdin.destroy()
		    }
	})
} 

main()
