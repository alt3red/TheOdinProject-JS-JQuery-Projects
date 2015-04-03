$(document).ready(function(){
  createGrid(16);
  clearGrid();
  generate();
  defaultSetting();
  random();
  gradient();
  trail();
  single();
});

function createGrid(x){
  var squareSize = (500/x);

  for(var i = 0; i < (x*x); i++) {
    $('#grid').prepend('<div class="square"></div>');
  }

  $(".square").width(squareSize);
  $(".square").height(squareSize);

  sketch();
}

function sketch(){
  $(".square").mouseover(function(){
    $(this).css("background-color", "white");
  });
}

function clearGrid() {
  $("#clear").click(function(){
    $(".square").unbind();
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    sketch();
  });
}

function generate() {
  $("#generate").click(function(){
    $(".square").remove();
    var newSize = $("input[name=size]").val();
    createGrid(newSize);
  });
}

function defaultSetting() {
  $("#defaultSetting").click(function(){
    $(".square").unbind();
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    sketch();
  })
}

function random() {
  $("#random").click(function(){
    $(".square").unbind();
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    $(".square").mouseover(function(){
      $(this).css("background-color", getRandomColor());
    });
  });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gradient(){
  $("#gradient").click(function(){
    $(".square").unbind();
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    $(".square").mouseover(function(){
      var opacity = $(this).css("opacity");
      if (opacity > 0.1) {
        $(this).css("opacity", opacity - 0.1);
      }else {
        $(this).css("opacity", 0);
      }
    })
  })
}

function trail() {
  $("#trail").click(function(){
    $(".square").unbind();
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    $(".square").mouseenter(function(){
      $(this).fadeTo(200,0);
    });
    $(".square").mouseleave(function(){
      $(this).fadeTo(800,1);
    });
  });
}

function single() {
  $("#single").click(function(){
    alert("Click once to change color. Double click to undo change.");
    $(".square").unbind();
    $(".square").css("background-color", "black");
    $(".square").css("opacity", 1);
    $(".square").click(function(){
      $(this).css("background-color", "white");
    })
    $(".square").dblclick(function(){
      $(this).css("background-color", "black");
    })
  });
}

