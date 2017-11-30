document.addEventListener('DOMContentLoaded', (e) => {
    let monitors = document.getElementById('website-list').getElementsByClassName('single-monitor');
    let subscribes = document.getElementById('monitored-websites').getElementsByClassName('single-website');
    let searchBar = document.getElementById('search-input');
    let singleBars = document.getElementsByClassName('single-website');

    let setBars = function() {
        Array.prototype.map.call(singleBars, function(singleBar) {
            singleBar.addEventListener('mouseover', function(event) {
                let imgHover = singleBar.getElementsByTagName('img')[0];
                if (imgHover) {
                    if (imgHover.src.includes('remove.svg')) {
                        imgHover.src = imgHover.src.replace(/remove/, 'removeBlack');
                    } else if (imgHover.src.includes('plus.svg')) {
                        imgHover.src = imgHover.src.replace(/plus/, 'plusBlack');
                    }
                }
            })
        });

        Array.prototype.map.call(singleBars, function(singleBar) {
            singleBar.addEventListener('mouseout', function(event) {
                let imgHover = singleBar.getElementsByTagName('img')[0];
                if (imgHover) {
                    if (imgHover.src.includes('removeBlack')) {
                        imgHover.src = imgHover.src.replace(/removeBlack/, 'remove');
                    } else if (imgHover.src.includes('plusBlack')) {
                        imgHover.src = imgHover.src.replace(/plusBlack/, 'plus');
                    }
                }
            })
        });
    }

    let trackSearch = searchBar.addEventListener('keyup', function(event) {
        let resultsText = document.getElementById('results-text').getElementsByTagName('p')[0];
        let searchBox = document.getElementById('website-list');

        let query = "query=" + searchBar.value;
        resultsText.parentNode.parentNode.style.display = "none";
        searchBox.style.display = "flex";

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let mainList = document.getElementById('website-list');
                while (mainList.childNodes.length > 2) {
                    mainList.removeChild(mainList.lastChild);
                }
                websites = JSON.parse(xhr.responseText);
                websites.map(function(website) {
                    let newEl = document.createElement('div');
                    newEl.innerHTML = '<div class="single-logo"></div><div class="single-name"></div><div class="single-date"></div><div class="single-monitor"></div>'
                    newEl.getElementsByClassName('single-logo')[0].innerHTML = '<p>' + website.links[0].extension + ' </p>';
                    newEl.getElementsByClassName('single-name')[0].innerHTML = '<p>' + website.name + ' </p>';
                    newEl.getElementsByClassName('single-date')[0].innerHTML = '<p>' + website.storedPage.date + '</p>';
                    newEl.getElementsByClassName('single-monitor')[0].innerHTML = '<img src="../img/plus.svg">';
                    newEl.getElementsByClassName('single-monitor')[0].className = 'single-monitor ' + website._id;
                    newEl.className = 'single-website';
                    mainList.appendChild(newEl);
                });
                if (mainList.children.length < 2) {
                  resultsText.parentNode.parentNode.style.display = "flex";
                  resultsText.innerHTML = "<i>" + searchBar.value + "</i> did not return any results. Do you want us to add <i>" + searchBar.value + "</i> ?";
                  searchBox.style.display = "none";
                }
                setMonitors();
                setBars();
            }
        };
        xhr.open('POST', '/search', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(query);
    });

    let subscribeClick = function(website) {
        // clicked on website that is already subscribed to; remove it from subscribes here
        let parentID = this.parentNode.className.split(' ')[1];
        let message = "id=" + parentID;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText === "removed") {
                    removeSubscribed(xhr.responseText, parentID);
                }
            }
        };
        xhr.open('POST', '/subscribed', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(message);
    };

    let monitorClick = function(website) {
        let parentID = this.parentNode.className.split(' ')[1];
        let message = "id=" + parentID;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // do something with above res.end() text from server
                removeMonitor(xhr.responseText, parentID);
            }
        };
        xhr.open('POST', '/browse', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(message);
    };

    const setSubscribes = function() {
        Array.prototype.map.call(subscribes, function(subscribed) {
            if (subscribed.getElementsByTagName('img')[0]) {
                subscribed.getElementsByTagName('img')[0].addEventListener('click', subscribeClick);
            }
        });
    };

    const setMonitors = function() {
        Array.prototype.map.call(monitors, function(monitor) {
            if (monitor.getElementsByTagName('img')[0]) {
                monitor.getElementsByTagName('img')[0].addEventListener('click', monitorClick);
            }
        })
    };

    setSubscribes();
    setMonitors();
    setBars();

    const removeMonitor = function(responseText, imgID) {
        if (responseText === "added") {
            // select parentDiv of clicked img in monitor list
            let selectedDiv = document.getElementById('website-list').getElementsByClassName(imgID)[0].parentNode;

            let transferDiv = selectedDiv.cloneNode(true);
            transferDiv.getElementsByTagName('img')[0].src = '../img/remove.svg';
            addSubscribed(transferDiv);

            let showAdded = document.createElement('i');
            showAdded.innerText = "added ";
            showAdded.style.color = "red";

            let oldText = selectedDiv.getElementsByClassName('single-name')[0].firstChild.innerText;
            selectedDiv.getElementsByClassName('single-name')[0].firstChild.appendChild(showAdded);

            let removeImage = selectedDiv.getElementsByTagName('img')[0];
            removeImage.parentNode.removeChild(removeImage);
            selectedDiv.getElementsByClassName(imgID)[0].className = 'single-monitor';
            // selectedDiv.parentNode.removeChild(selectedDiv);
        } else {
            console.log(responseText);
        }
    }

    const removeSubscribed = function(responseText, imgID) {
        let selectedDiv = document.getElementById('monitored-websites').getElementsByClassName(imgID)[0].parentNode;
        let transferDiv = selectedDiv.cloneNode(true);

        transferDiv.getElementsByTagName('img')[0].src = '../img/plus.svg';
        addMonitor(transferDiv);

        let showRemoved = document.createElement('i');
        showRemoved.innerText = "removed ";
        showRemoved.style.color = "red";

        let oldText = selectedDiv.getElementsByClassName('single-name')[0].firstChild.innerText;
        selectedDiv.getElementsByClassName('single-name')[0].firstChild.appendChild(showRemoved);

        let removeImage = selectedDiv.getElementsByTagName('img')[0];
        removeImage.parentNode.removeChild(removeImage);
        selectedDiv.getElementsByClassName(imgID)[0].className = 'single-monitor';
    }

    const addMonitor = function(transferDiv) {
        let monitorWrapper = document.getElementById('website-list');
        let transferName = transferDiv.getElementsByClassName('single-name')[0].getElementsByTagName('p')[0].innerHTML;
        Array.prototype.map.call(monitorWrapper.children, function(monitor) {
          let monitorName = monitor.getElementsByClassName('single-name')[0].getElementsByTagName('p')[0].innerHTML;
          if (monitorName.includes(transferName)) {
            monitor.parentNode.removeChild(monitor);
          }
        })
        monitorWrapper.appendChild(transferDiv);
        setMonitors();
        setBars();
    }

    const addSubscribed = function(transferDiv) {
        let subscribeWrapperChildren = document.getElementById('monitored-websites').getElementsByClassName('single-website');
        let transferName = transferDiv.getElementsByClassName('single-name')[0].getElementsByTagName('p')[0].innerHTML;
        Array.prototype.map.call(subscribeWrapperChildren, function(subscribed) {
          let subscribedName = subscribed.getElementsByClassName('single-name')[0].getElementsByTagName('p')[0].innerHTML;
          if (subscribedName.includes(transferName)) {
            subscribed.parentNode.removeChild(subscribed);
          }
        })
        document.getElementById('monitored-websites').appendChild(transferDiv);
        setSubscribes();
        setBars();
    }

});
