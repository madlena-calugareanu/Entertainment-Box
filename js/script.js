$( document ).ready(function() {
    

    $('#startGameBtn').on('click', ()=>{
        $('#start').addClass('d-none');
        $('#chooseGame').removeClass('d-none');
    })

    $('.card').on('click', ()=>{
        $('#chooseGame').addClass('d-none');
        $('#game').removeClass('d-none');
        $('#like-dislike').removeClass('d-none');
    });

    $('#like-dislike').on('click', ()=>{
        $('#like-dislike').hide();
        $('#nextBtn').removeClass('d-none');
    })

    const getRandomPerson = 

    $('#quizShow').on('click', ()=>{
        getRandomPerson();

    })

    async function getData(){
        try{
          const response =  await fetch('js/quiz.json', {
            assert: {
                type: 'json'
            }})
          return response.json()
        }catch(err){
          return err
        }
    };

    const jsonQuestions = getData();

    console.log(jsonQuestions);
});
