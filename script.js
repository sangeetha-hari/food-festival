console.log("hello");

function displayName(event) {
   event.preventDefault();
   let fo1 = document.getElementById('fooditems');
   let folist = fo1.querySelectorAll('input[type=radio]:checked').length;
   let foo = fo1.querySelectorAll('input[type=radio]:checked');
   console.log(folist);

   if (folist < 2) {
      alert("Select atleast two food items");
   }
   else {
      console.log("inside function")
      let firstName = document.getElementById('fname').value;
      console.log(firstName);
      let lastName = document.getElementById('lname').value;
      console.log(lastName);
      let addr = document.getElementById('address').value;
      console.log(addr);
      let gender = document.querySelector('input[type=radio][name=gender]:checked');
      console.log(gender.value);
      let state = document.getElementById('state').value;
      console.log(state);
      let country = document.getElementById('select-country').value;
      console.log(country);
      


      //  insert in table
      let tabele = document.getElementById("intable");
      let tabrow = tabele.insertRow();
      let td1 = tabrow.insertCell(); td1.innerText = document.getElementById('fname').value;
      let td2 = tabrow.insertCell(); td2.innerText = document.getElementById('lname').value;
      let td3 = tabrow.insertCell(); td3.innerText = document.getElementById('address').value;
      let td4 = tabrow.insertCell(); td4.innerText = document.getElementById('pincode').value;
      let td5 = tabrow.insertCell(); td5.innerText = document.querySelector('input[type=radio][name=gender]:checked').value;;
      let td6 = tabrow.insertCell(); td6.innerText = document.getElementById('state').value;;
      let td7 = tabrow.insertCell(); td7.innerText = document.getElementById('select-country').value;;
      //  let td8 = tabrow.insertCell(); td8.innerText=document.getElementById('fname').value;
      //  td1.innerText=firstName;
      let tabele2 = document.getElementById("foodtable");
      let tabrow2 = tabele2.insertRow();
      let td21 = tabrow2.insertCell(); td21.innerText = document.getElementById('fname').value;
      let td22 = tabrow2.insertCell(); td22.innerText = document.getElementById('lname').value;

      foo.forEach(ele => {
         console.log(ele.value)
         tabrow2.insertCell().innerText=ele.value;
      });

      // let td23 = tabrow2.insertCell(); td23.innerText = document.querySelector('input[type=radio][name=food1]:checked').value;
      // let td24 = tabrow2.insertCell(); td24.innerText = document.querySelector('input[type=radio][name=food2]:checked').value;
      // let td25 = tabrow2.insertCell(); td25.innerText = document.querySelector('input[type=radio][name=food3]:checked').value;
      // let td26 = tabrow2.insertCell(); td26.innerText = document.querySelector('input[type=radio][name=food4]:checked').value;
      // let td27 = tabrow2.insertCell(); td27.innerText = document.querySelector('input[type=radio][name=food5]:checked').value;


   }
}

//  function funcall()
//  {
//    console.log("This is a function call");
//    let a= document.getElementById('course');
//    console.log(a);
//  }


function add() {
   // document.write("I am inside functio");


}
