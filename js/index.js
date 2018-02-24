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