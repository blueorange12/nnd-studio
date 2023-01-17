// 문의하기 페이지 이동방법??
$('.noticeKey').on('click', function(){
    $('#notice').show()
    $('#qna').hide()
})
$('.qnaKey').on('click', function(){
    $('#notice').hide()
    $('#qna').show()
})


// $('.subMenu>li').on('click', function(){
//     // var idx = $(this).index()
//     // $('.subMenu>li').removeClass('on')
//     // $('.subMenu>li').eq(idx).addClass('on')

//     if(this === '.noticeKey') {
//         location.href = './board.html#notice'
//         $('#notice').show()
//         $('#qna').hide()
//     } else {
//         location.href = './board.html#qna'
//         $('#notice').hide()
//         $('#qna').show()
//     }
// })





