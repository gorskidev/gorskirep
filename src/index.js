import React from 'react';
import ReactDOM from 'react-dom';

function palindromeIndex (s) {
  let result = -1;
  const slen = s.length; 
  
  if (slen >= 1 && slen <= 100005 & s !== s.split('').reverse().join('')) {
       for (let i = 0; i < slen; i++) {
            if(s.charAt(i) !== s.charAt(slen - 1 - i)){
                 let s1 = s.substring(0, i) + s.substring((i + 1)); 
                 let s2 = s.substring(0, (slen - 1 - i)) + s.substring((slen - 1 - i) + 1); 
                 
                 console.log(i + " " + "s1: " + s1);
                 console.log(i + " " + "s2: " + s2);

                 if(s1 === s1.split('').reverse().join('')){
                    result = i;
                 }else if(s2 === s2.split('').reverse().join('')){
                    result = slen - 1 - i;
                 }                              
                 break;
            } 
       } 
  }
   
  return result;
}

console.log(palindromeIndex("abxa"));

class App extends React.Component{
    render(){
        return(
            <div>
                <div id="box">
                    <p id="scrollPosition"></p>
                    <p id="isMoving"></p>
                </div>
                <Child />
            </div>
        )
    }
}

class Child extends React.Component {
    render(){
        return (
            <div>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            <p class="Scroll"> - </p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));