
// маcка на телефон
document.addEventListener('DOMContentLoaded', () => {
const inputElement = document.querySelector('[data-mask="phone"]')  
const maskOptions = { mask: '+{7}(000)000-00-00'} // задаем единственный параметр mask
IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
})


//маска на поле ввода ФИО(два пробела и дальше-не позволяет ввод)
function applyFIOFilter(elem) 
{
    elem.addEventListener('keypress', function(e) 
    {
      var val = elem.value + e.key;
      if (val.split(" ").length == 4) e.preventDefault();
    });
} 
  applyFIOFilter(document.getElementById('fio'));


//Передача данных с формы index
const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);

        function getFormValue(event) {
            event.preventDefault()
            const fio = form.querySelector('[name="fio"]'), 
            compani = form.querySelector('[name="compani"]'),
            phone = form.querySelector('[name="phone"]'),
            longtext = form.querySelector('[name="comment"]')

            const data = {
                fio: fio.value,
                compani: compani.value,
                phone: phone.value,
                longtext: longtext.value
            };

            console.log(data); 
            }

           function alerted(){
            alert("Подтвердите данные: \n Ваша фамилия: " + fio.value
                    + "\n Ваша компания: " + compani.value
                    + "\n Ваш телефон: " + phone.value
                    + "\n Текст обращения: " + comment.value );
                    console.log (compani.value);
                        }

                        
                        /* мне стало чуток скучно*/
                        function getRandomInt(min, max) {
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        }
                        $("#my-button").hover(function () { 
                            $(this).css({
                                top: getRandomInt(0, 400)+"px",
                                left: getRandomInt(0, 200)+"px"
                            });
                        }, function () { });

                        //скрытие и открытие няма
                        $(function() {
                             $('#my-button').click(function(){
                                  $(this).slideUp();
                             });
                            $('#shows').click(function(){
                            $('#my-button').css({'visibility': 'visible'})
                            });
                        });
                        /* мне стало чуток скучно end*/

                        function data() {
                        
                            document.getElementById('data').innerHTML = "Ваша фамилия: "+ fio.value 
                            + "\n Ваша компания: " + compani.value
                            + "\n Ваш телефон: " + phone.value
                            + "\n Текст обращения: " + comment.value;
                            }