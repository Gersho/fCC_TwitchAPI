$(document).ready(function(){
  var accList = ["OgamingSC2", "cretetion", "freecodecamp", "RobotCaleb", "noobs2ninjas", "brunofin", "YoDa", "dota2ti"];
   $.ajaxSetup({
    cache: false
  });
  
  
  accList.forEach(function(currUser) {
    var callUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
    var twitchURL = "https://www.twitch.tv/";
    twitchURL += currUser;
    callUrl += currUser;
    
   // $("#output").append("<div>"+currUser+" is Offline </div> </br>");
       $.getJSON(callUrl, function(json){
      if (json.stream == null){
        $("#output").append("<a href='"+twitchURL+"' target=# ><div class='card offline'><div class='card-block'>"+currUser+": This streamer is currently offline.</div></div></a>");
        
      } else {
              $("#output").append("<a href='"+twitchURL+"' target=# ><div class='card online'><div class='card-block'>"+currUser+" is now broadcasting: "+json.stream.channel.status+"</div></div></a>");  
      
      };
      
    }); // fin getJSON
    
    
});

  
  
}); //fin doc ready



/*
$("#output").append("<a href='"+twitchURL+"'><div class='card w-50'><div class='card-header alert alert-success'>"+currUser+"</div><div class='card-block'><blockquote class='card-blockquote'> Current stream: "+json.stream.channel.status+"</blockquote></div></div></a>");

*/