var $ = window["optimizely"].get("jquery");

function firstRequest(){
  $.getJSON('//api.kickfire.com/ip', {ipkey: '************'}).then(function(res){
    var ip = res
    var newURL = 'https://api.kickfire.com/v3/company?ip='+res+'&key=************'
    secondRequest(newURL)
    })  
}

function secondRequest (url){
    $.getJSON(url).then(function(res){
        window.KickfireLayer = res.data[0]
    })
}

try{
    firstRequest()
} catch(error){
    console.error(error);
}