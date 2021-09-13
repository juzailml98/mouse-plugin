
///grtting user ip address
$.getJSON('http://ipinfo.io', function(data){
  var city=data.city;
  var ip=data.ip;
  var location=data.loc
  $(".location").text("city: "+city+" ip address:"+ip+" location:"+location);
    console.log(data);
});
