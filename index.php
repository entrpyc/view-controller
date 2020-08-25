<html>

<head>
  <title>Demo</title>

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="view-controler.css">
  <link rel="stylesheet" href="form.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="wrapper">
    <div class="color1" data-view-module="1"></div>
    <div class="color2" data-view-module="2"></div>
    <div class="color3" data-view-module="3"></div>
    <div class="container mask-animate" data-view-container data-view-default="0">
      <div class="user-type view active" data-view-module="0">
        <div class="main">
          <div class="card" data-view-control="1">
            <div class="icon-block">H</div>
            <p>Login as a Host</p>
          </div>
          <div class="card" data-view-control="2">
            <div class="icon-block">P</div>
            <p>Login as a Participant</p>
          </div>
          <div class="card" data-view-control="3">
            <div class="icon-block">S</div>
            <p>Login as a Spectator</p>
          </div>
        </div>
      </div>
      <div class="host-login view" data-view-module="1">
        <?php 
        $user = 'Host';
        include('login_form.php');
        ?>
      </div>
      <div class="participant-login view" data-view-module="2">
        <?php 
        $user = 'Participant';
        include('login_form.php');
        ?>
      </div>
      <div class="spectator-login view" data-view-module="3">
        <?php 
        $user = 'Spectator';
        include('login_form.php');
        ?>
      </div>
    </div>
  </div>
  <script src="list-dom.js"></script>
  <script>
    ListDOM({
      run: ['forEach', 'map', 'filter', 'find'],
    })
  </script>
  <script src="white-papers.js"></script>
  <script src="main.js"></script>
  <script
    src="https://static.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js">
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
  <script id="rendered-js">
    $('input[type="submit"]').click(function () {
      $('.login').addClass('test');
      setTimeout(function () {
        $('.login').addClass('testtwo');
      }, 300);
      setTimeout(function () {
        $(".authent").show().animate({
          right: -320
        }, {
          easing: 'easeOutQuint',
          duration: 600,
          queue: false
        });
        $(".authent").animate({
          opacity: 1
        }, {
          duration: 200,
          queue: false
        }).addClass('visible');
      }, 500);
      setTimeout(function () {
        $(".authent").show().animate({
          right: 90
        }, {
          easing: 'easeOutQuint',
          duration: 600,
          queue: false
        });
        $(".authent").animate({
          opacity: 0
        }, {
          duration: 200,
          queue: false
        }).addClass('visible');
        $('.login').removeClass('testtwo');
      }, 2500);
      setTimeout(function () {
        $('.login').removeClass('test');
        $('.login div').fadeOut(123);
      }, 2800);
      setTimeout(function () {
        $('.success').fadeIn();
      }, 3200);
    });

    $('input[type="text"],input[type="password"]').focus(function () {
      $(this).prev().animate({
        'opacity': '1'
      }, 200);
    });
    $('input[type="text"],input[type="password"]').blur(function () {
      $(this).prev().animate({
        'opacity': '.5'
      }, 200);
    });

    $('input[type="text"],input[type="password"]').keyup(function () {
      if (!$(this).val() == '') {
        $(this).next().animate({
          'opacity': '1',
          'right': '30'
        }, 200);
      } else {
        $(this).next().animate({
          'opacity': '0',
          'right': '20'
        }, 200);
      }
    });

    var open = 0;
    $('.tab').click(function () {
      $(this).fadeOut(200, function () {
        $(this).parent().animate({
          'left': '0'
        });
      });
    });
    //# sourceURL=pen.js
  </script>
</body>

</html>