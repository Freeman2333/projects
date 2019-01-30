(function($) {
  
  var $li =$(".img-list").find('>li'),
      $links = $li.find('>a'),
      $lightbox = $('.lightbox'),
      $overlay = $('.overlay'),
      $prev= $('.prev'),
      $next= $('.next'),
      liIndex,
      targetImg;

    var imgs = [];
     var imgSources = [
  'images/img-1-lg.jpg',
  'images/img-2-lg.jpg',
  'images/img-3-lg.jpg',
  'images/img-4-lg.jpg'
  ];

  for( var i =0; i < imgSources.length; i++){
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }


  $links.click(function (e) {
    e.preventDefault();
    liIndex  = $(this).parent().index()
    // console.log(liIndex)
    targetImg = $(this).attr('href');
    $lightbox.find('img').attr('src', targetImg);
    $lightbox.fadeIn();
  })

  $overlay.click(function () {
    $lightbox.fadeOut();
  });
  $next.click(function () {
    if ((liIndex+1)<$li.length) {
      targetImg = $li.eq(liIndex+1).find('>a').attr('href');
      liIndex++;
    }else{
      targetImg = $li.eq(0).find('>a').attr('href');
      liIndex=0;
    }
    // console.log(liIndex)
     $lightbox.find('img').attr('src', targetImg);
  })

  $prev.click(function () {
    if (liIndex===0) {
      liIndex= $li.length-1
    }else{
      liIndex--;
    }
    targetImg = $li.eq(liIndex).find('a').attr('href');
     $lightbox.find('img').attr('src', targetImg);
     console.log(liIndex)
  })

})(jQuery);
