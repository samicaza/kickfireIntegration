
function firstURL (){
    var answer = fetch('https://api.kickfire.com/ip?ipkey=45cc7d7e4b872091').then(function(res){
        res.json().then(function(hola){
            console.log('hola',hola)
            secondURL(hola)
        })
    })    
}

function secondURL(url){   
    var newURL = 'https://api.kickfire.com/v3/company:(all)?ip='+url+'&key=7ec15802192a68c3'
    var nextURL = fetch(newURL).then(function(res){
        res.json().then(function(hola){
            console.log('hola',hola['data'][0])
            setCustomAttributes(hola['data'][0])
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

    console.log('data object is',data)
    console.log('attributes object is',attributes)

    // window.optimizely = window.optimizely || [];
    // window["optimizely"].push({
    //     "type": "user",
    //     "attributes": attributes
    // })
}


