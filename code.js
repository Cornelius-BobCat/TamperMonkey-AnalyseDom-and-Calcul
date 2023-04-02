
var url = "https://www.example.com/dash/gain";
if (window.location.href === url) {

    function calculateEarnings() {
    var count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0, count7 = 0, count8 = 0;
    
    for (var i=0; i<99; i++) {
        var rowKey = document.getElementById('row-key-' + i);
        if (rowKey !== null && typeof(rowKey) !== 'undefined') {
            var content3 = rowKey.children[3].textContent.trim().replace(/ /g,'');
            if (parseInt(content3)) {
                count1 += parseInt(content3);
            }
            var content4 = rowKey.children[4].textContent.trim().replace(/ /g,'');
            if (parseInt(content4)) {
                count2 += parseInt(content4);
            }
            var content5 = rowKey.children[5].textContent.trim().replace(/ /g,'');
            if (parseInt(content5)) {
                count3 += parseInt(content5);
            }
            var content6 = rowKey.children[6].textContent.trim().replace(/ /g,'');
            if (parseInt(content6)) {
                count4 += parseInt(content6);
            }
            var content7 = rowKey.children[7].textContent.trim().replace(/ /g,'');
            if (parseInt(content7)) {
                count5 += parseInt(content7);
            }
            var content8 = rowKey.children[8].textContent.trim().replace(/ /g,'');
            if (parseInt(content8)) {
                count6 += parseInt(content8);
            }
            var content9 = rowKey.children[9].textContent.trim().replace(/ /g,'');
            if (parseInt(content9)) {
                count7 += parseInt(content9);
            }
            var content10 = rowKey.children[10].textContent.trim().replace(/ /g,'');
            if (parseInt(content10)) {
                count8 += parseInt(content10);
            }
        }
    }
    
    var a = Math.ceil(count1*0.05);
    var b = Math.ceil(count2*0.05);
    var c = Math.ceil(count3*0.05);
    var d = Math.ceil(count4*0.05);
    var e = Math.ceil(count5*0.05);
    var f = Math.ceil(count6*0.05);
    var g = Math.ceil(count7*0.05);
    var h = Math.ceil(count8*0.05);
    
    var message = 'A = ' + a + '$  \n B = ' + b + '$ \n C = ' + c + '$  \n D = ' + d + '$ \n  E = ' + e + '$ \n F = ' + f + '$ \n  G = ' + g + '$  \n H = ' + h + '$';
    
    alert(message);
    }
    

    var earningsTabs = document.querySelector('.earnings-tabs.tabs-ds');
    
    var earningsLink = document.createElement('a');
    earningsLink.setAttribute('href', '#');
    earningsLink.setAttribute('class', 'tab-interactive-ds tab-interactive-medium-ds tab-link-ds tab-interactive-active-ds');
    earningsLink.innerHTML = 'Calculer les gains';
    
    var earningsListItem = document.createElement('li');
    earningsListItem.classList.add('tab-ds');
    
    earningsListItem.appendChild(earningsLink);
    
    earningsTabs.appendChild(earningsListItem);
    
    earningsLink.addEventListener('click', function(event) {
      event.preventDefault();
      calculateEarnings();
    });
    
    }