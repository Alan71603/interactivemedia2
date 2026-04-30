( function(){
    'use strict'

    console.log('Reading JS')

    const myForm = document.querySelector('form');

    const madlibArticle = document.querySelector('#overlay')

    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        const constellation = document.querySelector("#constellation").value;
        const object = document.querySelector("#object").value;
        const adjective1 = document.querySelector("#adjective1").value;
        const animal1 = document.querySelector("#animal1").value;
        const name1 = document.querySelector("#name1").value;
        const emotion = document.querySelector("#emotion").value;
        const verb = document.querySelector("#verb").value;
        const name2 = document.querySelector("#name2").value;
        const adjective2 = document.querySelector("#adjective2").value;
        const animal2 = document.querySelector("#animal2").value;

       let myText;

        if(constellation == ''){
         myText = "Please provide a constellation";
         document.querySelector('#constellation').focus();

        } else if(object == ''){
         myText = "Please provide an object";
         document.querySelector('#object').focus();
 
        } else if(adjective1 == ''){
         myText = "Please provide an adjective";
         document.querySelector('#adjective1').focus();
        } else if(animal1 == ''){
         myText = "Please provide an animal";
         document.querySelector('#animal1').focus();
        } else if(name1 == ''){
         myText = "Please provide a name";
         document.querySelector('#name1').focus();
        } else if(emotion == ''){
         myText = "Please provide an emotion";
         document.querySelector('#emotion').focus();
        } else if(verb == ''){
         myText = "Please provide a verb";
         document.querySelector('#verb').focus();
        } else if(name2 == ''){
         myText = "Please provide a name";
         document.querySelector('#name2').focus();
        } else if(adjective2 == ''){
         myText = "Please provide an adjective";
         document.querySelector('#adjective2').focus();
        } else if(animal2 == ''){
         myText = "Please provide an animal";
         document.querySelector('#animal2').focus();
        } 
        else{
          myText = `As I looked into the starry night sky, I tried to look for the constellation ${constellation}. As I grabbed my ${object} I began to look at the outline of the ${adjective1} stars. I couldn’t believe my eyes, the star patterns create an ${animal1} in the sky. I called out to my friend ${name1} to come check it out. He was a bit annoyed because I interrupted him so he gave me a ${emotion} face. When I point out the constellation he is too stunned to ${verb}. He couldn't believe it either. ${name2} asks what are you calling it? I proudly say, “It’s The ${adjective2} ${animal2}".`;
          document.querySelector('#overlay').style.display="block";
          document.querySelector('#constellation').value = '';
          document.querySelector('#object').value = '';
          document.querySelector('#adjective1').value = '';
         document.querySelector('#animal1').value = '';
         document.querySelector('#name1').value = '';
         document.querySelector('#emotion').value = '';
         document.querySelector('#verb').value = '';
         document.querySelector('#name2').value = '';
         document.querySelector('#adjective2').value = '';
         document.querySelector('#animal2').value = '';
        }


       document.querySelector('#overlay article').innerHTML = myText;
    });

} )();