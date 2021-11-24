function callback() {
    console.log("Coming from callback");
  }
  
  function higherOrder(fn) {
    console.log("About to call callback");
    fn(); // Callback function is invoked
    console.log("Callback has been invoked");
  }
  
  higherOrder(callback);


  function sync(){
      cosole.log("Hi");
      console.log("Elaiya Bharathi")
  }


  console.log("First");
  setTimeout(() => {
      console.log("Second");
      
  }, 4000);
  console.log("third");