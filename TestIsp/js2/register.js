form.addEventListener('submit', getFormValue);

        function getFormValue(event) 
        {
            event.preventDefault()
            const email = form.querySelector('[name="email"]'), 
            psw = form.querySelector('[name="psw"]'),
            pswrepeat = form.querySelector('[name="pswrepeat"]'); 

            if (psw.value == pswrepeat.value)
           {  alert("Пользователь с email: " + email.value + " и паролем: " + psw.value + " успешно зарегистрирован!");
             document.getElementById('form').reset();
             window.location.href = 'indexx.html';
            }
            else  {
                alert("Введеные пароли не совпадают"); 
                psw.value = "";   
                pswrepeat.value = "";
            }

            const data = {
            email: email.value,
            psw: psw.value,
            pswrepeat: pswrepeat.value,
            };
            console.log(data); 
            }


//для node js server с 3000 портом (для корректной работы стоит вынести код в фаил html)
// form.addEventListener('submit', getFormValue);

// function getFormValue(event) 
// {
//     event.preventDefault()
//     const email = form.querySelector('[name="email"]'), 
//     psw = form.querySelector('[name="psw"]'),
//     pswrepeat = form.querySelector('[name="pswrepeat"]'); 

//      if (psw.value == pswrepeat.value)
//     { 
//       const userr = 
//       {
//       email: email.value,
//       psw: psw.value,
//       pswrepeat: pswrepeat.value,    
//       };

//         const data = JSON.stringify(userr);
//         const xhr = new XMLHttpRequest();
        
//         xhr.open("POST", "/user");
//         xhr.setRequestHeader("Content-Type", "application/json");
          
//         // обработчик получения ответа сервера
//         xhr.onload = () => 
//         {
//             if (xhr.status == 200) 
//             { 
//               const user = JSON.parse(xhr.responseText)
//               alert ("Вы зарегистрировали пользователя с данными:\n email: " + userr.email + "\n пароль: " + userr.psw);
//             } 
//             else
//               {
//                 console.log("Server response: ", xhr.statusText);
//               }
//         };
//         xhr.send(data); 
        
//         document.getElementById('form').reset();
     
//     //     window.location.href = 'Indexx.html'; 
    
//     }
//      else 
//      {
//         alert("Введеные пароли не совпадают."); 
//         psw.value = "";   
//         pswrepeat.value = "";
//      }
// }  