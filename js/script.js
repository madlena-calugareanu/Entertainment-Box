
$( document ).ready(function() {


    $('#startGameBtn').on('click', ()=>{
        $('#start').addClass('d-none');
        $('#chooseGame').removeClass('d-none');
    })

    $('.card').on('click', ()=>{
        $('#chooseGame').addClass('d-none');
        $('#game').removeClass('d-none');
        $('#nextBtn').removeClass('d-none');
    });


    $('#quizShow').on('click', ()=>{
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandom(questionsQuiz);
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandom(questionsQuiz);
        })
    });

    $('#debatable').on('click', ()=>{
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandom(debatable);
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandom(debatable);
        })
    });

    $('#cineAr').on('click', ()=>{
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandom(cineAr);
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandom(cineAr);
        })
    });

    $('#generalCulture').on('click', ()=>{
        $('#answer').removeClass('d-none');
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandomGeneralQuestion();
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandomGeneralQuestion();
        })
    });


    function getRandom(array){
        return array[Math.floor(Math.random() * array.length)];
    };

    function getRandomGeneralQuestion(){
        const generalQuestion = getRandom(generalCulture);
        return generalQuestion[0];
    }


    

    /* ------ Get Random Element, return it, remove it from array, then repeat 

        function newRandomArray(array){
            const newArray = Array.from(array);
            const returnElement = getRandom(newArray);
            const indexEl = newArray.indexOf(returnElement);
            
                newArray.splice(indexEl, 1);
            
            return returnElement;
        }

        console.log(newRandomArray(people));
    */

});
