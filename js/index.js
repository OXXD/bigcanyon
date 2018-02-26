// 高德卡片
$( ()=>{
    $('.u_tab').hover(
        function () {
            var $this = $(this);
            $this.css({zIndex: 10, opacity: 1}).addClass('current').siblings().removeClass('current');
            var zIndex = $this.css('zIndex');
            for (const prev of $this.prevAll()) {
                zIndex--;
                $(prev).css({
                    zIndex: zIndex,
                });
            }
            zIndex = 10;
            for (const next of $this.nextAll()) {
                zIndex--;
                $(next).css({
                    zIndex: zIndex,
                });
            }
          
        },
        function () {
        }
    )
});

// 提交留言
$(() => {
    var $submitBtn = $('.message-submit'),
        $formField = $(".form-field"),
        $thxNote = $('.thx-note');
    
    $submitBtn.click(function (e) { 
        e.preventDefault();
        console.log($formField);
        var $uname = $formField.find('[name=uname]'),
            $uemail = $formField.find('[name=uemail]'),
            $utext = $formField.find('[name=utext]');
        var isUnameValidated = true, isUemailValidated = true;
        // console.log(uname, uemail, utext);
        if (!$uname.val()) {
            isUnameValidated = false;
            $uname.next().show();
        } else {
            isUnameValidated = true;
            $uname.next().hide();
        }
        if (!$uemail.val()) {
            isUemailValidated = false;
            $uemail.next().show();
        } else {
            isUemailValidated = true;
            $uemail.next().hide();
        }

        if (isUnameValidated && isUemailValidated) {
            $formField.hide();
            $thxNote.show();
        }
        
    });
})