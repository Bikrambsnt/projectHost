   
   //Todo list logic

   const userInput = document.querySelector('#todo-input');
   const submit = document.querySelector('#add-todo');
   const ul =document.querySelector('#todo-list');
   const error =document.querySelector('#error');
    
   let addItem = []; //empty array to hold the ul list







   // submit.addEventListener('click' , (e)=>{  //instead of only single listener i can do

      // e.preventDefault();


      submit.addEventListener('click' ,(e) =>{ //on click
         e.preventDefault();
         todoList(); //this will call the  todoList func
          // console.log('clicked')
      });
   
   
      userInput.addEventListener('keydown' ,(e) =>{ //on enter
         
         if(e.key === 'Enter'){
            // console.log(e.key)
            todoList(); //same goes here
            
         }
      });


      function todoList() { //this function will aloows me to add more event listener...

  
      const addList =String(userInput.value).trim();
      if(addList ===''){
         error.innerHTML ='Please Enter a Task';
         return;
      }
else{
      error.textContent ='';
      insert(addList);
      userInput.value ='';
     
}
   // })

 function insert(add){

   addItem.push(add);
   newList(); //This is to update the push value in list..
   
   
 }

 function newList (){
   ul.innerHTML =''; //This is to remove the duplicate ul from printing again and again..
   addItem.forEach((item , index) => { // here item is a insert value and index is a index of an array that value stored
      const li = document.createElement('li');
      li.innerHTML = `${item} <button class='remove-Btn' id ="clear-${index}">x</button>`;
      

      //  console.log(item)
      // console.log(index);
      
    
      // console.log(li);
      ul.appendChild(li); 
  
      // clear    

      const removeBtn = document.querySelector(`#clear-${index}`);
      removeBtn.addEventListener('click', () =>{
         remove(index); //passing value to the remove function
      });
      

   });

   

 } 



  

 function remove(del){

   addItem.splice(del ,1); //splice is to remove the index of a array which i want to delete.
   // console.log(addItem);
   newList(); //updating the newList function.

   

}
      }
    

