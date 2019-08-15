var add = (a=0,b=0)=>{
	return a+b;
}
var tota= add(1,9);
console.log(tota);


var sumarray = (a=[2,4,2],b=[0,2])=>{
	return [...a,...b];
}
var totalarray= sumarray();
console.log(totalarray);


var ojectex ={a:1,b:2};
var ojecttot = ({a=0, b=0}={})=>{
	return a+b;
};
var ojectsum =ojecttot(ojectex);
console.log(ojectsum);


var func = (x, y) => { return x + y; };
console.log(func(2,4));