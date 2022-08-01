
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

    $('#menuList').on('click', ()=>{
        $('#chooseGame').removeClass('d-none').addClass('menuStyles');
        $('#menuList').addClass('d-none');
        $('#exitList').removeClass('d-none');
    });

    $('#exitList').on('click', ()=>{
        $('#chooseGame').addClass('d-none').removeClass('menuStyles');
        $('#menuList').removeClass('d-none');
        $('#exitList').addClass('d-none');
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
        $('#answer').on('click', ()=>{
            $('#generalQuestionAnswer').removeClass('d-none');
            $('#answer').addClass('d-none');
        })
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandomGeneralQuestion();
        document.getElementById('generalQuestionAnswer').innerHTML = displayAnswer;
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandomGeneralQuestion();
            document.getElementById('generalQuestionAnswer').innerHTML = displayAnswer;
            $('#generalQuestionAnswer').addClass('d-none');
            $('#answer').removeClass('d-none');
        })
    });


    function getRandom(array){
        return array[Math.floor(Math.random() * array.length)];
    };

    var displayAnswer;

    function getRandomGeneralQuestion(){
        const generalQuestion = getRandom(generalCulture);
        const displayQuestion = generalQuestion[0];
        displayAnswer = generalQuestion[1]
        return displayQuestion;
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
