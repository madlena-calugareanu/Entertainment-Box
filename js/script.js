
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

    

    function getRandom(array){
        return array[Math.floor(Math.random() * array.length)];
    };
});
