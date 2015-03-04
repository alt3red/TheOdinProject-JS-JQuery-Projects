$(document).ready(function() {
 
 // header 
   $('#header').append('<h1>Welcome to Cake\'s Pie Shop</h1>'); 
   $('#header').append('<h2>Fresh Baked Pies Daily</h2>'); 
   $('#header').append('<img src="images/header.jpg" alt="photos of a selection of Cake\'s pie">')

 // nav 
   $('#nav').append('<hr>');
   $('#nav').append('<li><a href="#" id="home"><img id="pie" src="images/pie.png" alt="black and white pie icon"></a>Home</li>'); 
   $('#nav').append('<li><a href="#" id="about"><img id="pie" src="images/pie.png" alt="black and white pie icon"></a>About</li>'); 
   $('#nav').append('<li><a href="#" id="menu"><img id="pie" src="images/pie.png" alt="black and white pie icon"></a>Menu</li>');
   $('#nav').append('<hr>');

 // click on a nav link and it erases previous content and appends page-specific content 

  $('#home').on('click', function() {
  	$('#body').text('');
  	$('#body').append('<h3>Come to Cakes for Fresh Baked Pie</h3>'); 
  	$('#body').append('<p>Welcome to Bakersville, Florida\'s top pie shop!\n At Cake\'s Pie Shop, we pride ourselves in using locally sourced, fresh ingredients.\nWe bake seasonal pies using time-tested baking techniques to offer you fresh baked pie daily.<\p>'); 
  });

  $('#about').on('click', function() {
  	$('#body').text('');
  	$('#body').append('<h3>Meet the Owner: Cakes Bernardo</h3>'); 
  	$('#body').append('<p>Hi, I\'m Cakes. I\'ve been baking pies since I was a little girl. My Grandma taught me her time tested recipes and I am proud to make pie the old-fashioned way.</p>');

  });

  $('#menu').on('click', function() {
    $('#body').append('<h3>Our Daily Selection of Fresh Baked Pies</h3>');
    $('#body').append('<h4>Carl\'s Chocolate Chess</h4>');
    $('#body').append('<img src="images/chocolatechess.jpg" alt="Chocolate chess pie photo">'); 
    $('#body').append('<h4>Cinnamon Apple</h4>');
    $('#body').append('<img src="images/cinnamonapple.jpg" alt="Cinnamon apple  pie photo">'); 
    $('#body').append('<h4>Pecan Pie</h4>');
    $('#body').append('<img src="images/pecan.jpg" alt="Pecan pie photo">'); 
  });

  //animate navbar pie (nonfunctioning)
  $('#pie').on('mouseenter', function() {
    $(this).animate({top: '-=15px'}, 200);
  }, function() {
    $(this).animate({top: '+=15px'}, 200);
  });

});





