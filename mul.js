const math =  require('./math.js');
let stdin = process.openStdin()
let a ; 

const main = () => {
	console.log('a:')
	stdin.addListener("data",(value) =>{

			for(var i=1 ; i<=12 ; i++){
			a = math.mul(value,i);
			console.log('Multiple(mul 1-12) :'+'\n'+ +value+ '*' +i+ '=' +a)
			}
	      stdin.destroy()
	})
} 

main()
