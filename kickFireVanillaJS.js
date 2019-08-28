function firstURL (){
    var answer = fetch('https://api.kickfire.com/ip?ipkey=**********').then(function(res){
        res.json().then(function(response){
            secondURL(response)
        })
    })    
}

function secondURL(url){   
    var newURL = 'https://api.kickfire.com/v3/company:(all)?ip='+url+'&key=**********'
    var nextURL = fetch(newURL).then(function(res){
        res.json().then(function(response){
            setCustomAttributes(response['data'][0])
        })
    })   
} 

function setCustomAttributes(data){
    var kickFireData = data
    var attributes = {}
    attributes['kickFireCity'] = kickFireData['city']
    attributes['kickFireCountry'] = kickFireData['country']
    attributes['kickFireEmployees'] = kickFireData['employees']
    attributes['kickFireisISP'] = kickFireData['isISP']
    attributes['kickFireRegion'] = kickFireData['region']
    attributes['kickFireRevenue'] = kickFireData['revenue']
    attributes['kickFireRegion'] = kickFireData['region']
    attributes['kickFireRevenue'] = kickFireData['revenue']
    attributes['kickFireTradeName'] = kickFireData['tradeName']
    attributes['kickFireWebsite'] = kickFireData['website']
    attributes['kickFireSICCode'] = kickFireData['sicCode']
    
    // window.optimizely = window.optimizely || [];
    // window["optimizely"].push({
    //     "type": "user",
    //     "attributes": attributes
    // })
}


