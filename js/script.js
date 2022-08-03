
$( document ).ready(function() {

    /* Go from landing page to add players */
    $('#startGameBtn').on('click', ()=>{
        $('#choosePlayers').removeClass('d-none');
        $('#start').addClass('d-none');
    })

    /* Go from add players to choose game */
    $('#GameBtn').on('click', ()=>{
        $('#chooseGame').removeClass('d-none');
        $('#choosePlayers').addClass('d-none');
    });

    /* Go from Players page to game page */
    $('.card').on('click', ()=>{
        $('#chooseGame').addClass('d-none');
        $('#game').removeClass('d-none');
        $('#nextBtn').removeClass('d-none');
    });

    /* Menu appear and disappear*/
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
        });
        $('#menuList').removeClass('d-none');
        $('#exitList').addClass('d-none');
    });

    $('#debatable').on('click', ()=>{
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandom(debatable);
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandom(debatable);
        });
        $('#menuList').removeClass('d-none');
        $('#exitList').addClass('d-none');
    });

    $('#cineAr').on('click', ()=>{
        document.getElementById('numeJucator').innerHTML = getRandom(people);
        document.getElementById('question').innerHTML = getRandom(cineAr);
        $('#next').on('click', ()=>{
            document.getElementById('numeJucator').innerHTML = getRandom(people);
            document.getElementById('question').innerHTML = getRandom(cineAr);
        });
        $('#menuList').removeClass('d-none');
        $('#exitList').addClass('d-none');
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
        });
        $('#menuList').removeClass('d-none');
        $('#exitList').addClass('d-none');
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

    /* Lista de persoane */

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    // Create a new list item when clicking on the "Add" button

    $("#addPerson").on("click", ()=>{
        newElement();
    })

    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("personInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
        alert("Scrie cel putin doua nume!");
        } else {
        document.getElementById("myPeople").appendChild(li);
        }
        document.getElementById("personInput").value = "";
    
        /*
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        */

        $("#GameBtn").on("click", ()=>{
            people.push(inputValue);
            console.log(people);
        })
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
