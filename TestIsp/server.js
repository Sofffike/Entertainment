const http = require("http");   //обработка входящих запросов
const fs = require("fs");     //для чтения index.html

http.createServer(async (request, response) => {
      
    if(request.url == "/user"){
         
          const buffers = [];   // буфер для получаемых данных
 
         // получаем данные из запроса в буфер
          for await (const chunk of request) {
            buffers.push(chunk);
          }

          const data = Buffer.concat(buffers).toString();
          const user = JSON.parse(data); // парсим строку в json
    
        // изменяем данные полученного объекта
        user.email = user.email;
        user.psw = user.psw;
        // отправляем измененый объект обратно клиенту
        response.end(JSON.stringify(user));
    }
    else{
        fs.readFile("register.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));


//    node server.js
//    C:\Users\User\Desktop\Index