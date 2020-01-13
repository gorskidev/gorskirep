import React from 'react';
import ReactDOM from 'react-dom';

let lastScrollPosition = window.pageYOffset
let currentScrollPosition = Math.round(window.pageYOffset * 100) / 100;
let isScrolled = false;

function timeRegister(){
    let time = new Date();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    let milisecond = time.getMilliseconds();

    let report = "Minute: " + minutes + " " + "Second: " + second + " " + "Milisecond: " + milisecond

    return report;
}

window.addEventListener('scroll', function() {
    let currentScrollPosition = Math.round(window.pageYOffset * 100) / 100;
    const classScroll = document.getElementsByClassName('Scroll');
       // console.log("Current scroll: " + currentScrollPosition);
    for(let i = 0; i < classScroll.length; i++){
        document.getElementsByClassName('Scroll')[i].innerHTML = currentScrollPosition + 'px';
    }

    isScrolled = true;

    isMoving();
    
})

function isMoving() {
    currentScrollPosition = Math.round(window.pageYOffset * 100000) / 100000;
    let scrollBy = 20;

    if(Math.round(lastScrollPosition) === Math.round(currentScrollPosition)){
        console.log("No scroll is being used.");
        isScrolled = false;

        document.getElementById("isMoving").innerHTML = "IsMoving: " + isScrolled;
    }
    else{
        console.log("Scroll registered.")
        document.getElementById("scrollPosition").innerHTML = "Current scroll: " + currentScrollPosition;
        document.getElementById("isMoving").innerHTML = "IsMoving: " + isScrolled;
        console.log("[ at: " + timeRegister() + " ]");
    }

    lastScrollPosition = currentScrollPosition;

    if(isScrolled == true){
        setTimeout(isMoving, 500);
    }
}



class App extends React.Component{
    constructor(props){
        super(props);
    }

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