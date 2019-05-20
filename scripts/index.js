
//essentially an onload function
$(document).ready(function() {
  $("#loadstuff").load(loadie());
});

$(document).ready(function() {
  $("#gen").click(clickie());
});


function loadie(){
    startDate();
    startTime();
    genQuote();
};

function clickie(){
    genQuote();
};


function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
//  var tweetQuote = quotes[randNum].split(' ').join('%20');
//  tweetQuote = tweetQuote.split('<br>').join('');
//  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
//  $('.twitter-share-button').attr('href', tweetQuote);
}

var quotes = [
'Every day and in every way I am getting better and better','I am abundantly joyful and happy','I am so grateful for my life','I find beauty and joy in ordinary things','My life is a joy. I relax easily and open myself up to delightful surprises','My life is a joy filled with love, fun and friendship','I choose love, joy and freedom, open my heart and allow wonderful things to flow into my life','I am free, and always have been. Experiences that made me feel like a victim were only experiences that appeared and disappeared in the arena of consciousness that I am',
];


//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
};


//make the world spin 
$(document).ready(function() {

    // MAKE THE WORLD SPIN
    var worldElement = $('.world')[0],
        worldImages = [
            'images/world-1.png',
            'images/world-2.png',
            'images/world-3.png'
        ],
        currentImageIndex = 0;

    setInterval(spinWorld, 1000);

    function spinWorld() {
        currentImageIndex ++;

        if (currentImageIndex === worldImages.length) {
            currentImageIndex = 0;
        }

        worldElement.setAttribute('src', worldImages[currentImageIndex]);
    }
    

});