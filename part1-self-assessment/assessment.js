console.log('Let\'s start Hacking!');

console.log('Let\'s start Hacking!');

var string = 'Javascript is super duper awesome';

var myProfileObject = {};

var javaScriptArray = ['J','a','v','a'];

//#1
console.log('Javascript is super duper awesome'.charAt(4));

//#2 
for(var i = 0; i < 'Javascript is super duper awesome'.length; i++){
	console.log('Javascript is super duper awesome'[i]);
}

// //#3
var i = 0;  //give i a beginning value
while(i < 'Javascript is super duper awesome'.length){
	console.log('Javascript is super duper awesome'[i]);
	i++; //increase i. loop will end when i reaches 'ly'
}

// //#4
myProfileObject.school = 'Telegraph Prep';
myProfileObject.location = 'Berkeley, California';
myProfileObject.name = 'Lydia Demissachew';
// //method: dot notation.

//#5
var func = function(obj,name){

	var nameArray = name.split(' '); //Array of first and last name.  
	var firstName = nameArray[0];
	var lastName = nameArray[1];

  return {
		name: name,
		placeOfBirth: obj.placeOfBirth,
		hobby: obj.hobby,
		method: function(name){
			console.log('My first name is ' + firstName + 'and my last name is '
			+ lastName)
		}
	}
};
var testObj = {name:'Lydia',placeOfBirth: 'CA',hobby: 'reading'};
console.log(func(testObj,'Lydia Demissachew'));
//'my first name is...' does not show up when logged to the console. I wonder if it is supposed to.


//#6
var nameChecker = function(name){
	var objectName = func(testObj,'Lydia Demi').name;
  if(name === objectName){// if name in parameter === name property in previous function
    return true;
}
	else { return false; } 

};
console.log(nameChecker('Lydia Demi'));

//#7
var findLength = function(obj){

  if(Array.isArray(obj)){
    return obj.length;
  }

  else {
    var count = 0;
	for(var key in obj){
	 count++;
    }
    return count;
   }

};

//#8 
var modify = function(javaScriptArray){
	 javaScriptArray.push('S','c','r','i','p','t');
	 return javaScriptArray;
};

//#9
var combined = function(array){
	return [array.join('')];
}

//Question: why is it bad syntactically to indent using tab?

//Note: 














