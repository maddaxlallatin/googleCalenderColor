var obs = new MutationObserver(function (mutations, observer) {
  for (var i = 0; i < mutations[0].addedNodes.length; i++) {
      if (mutations[0].addedNodes[i].nodeType == 1) {
          $(mutations[0].addedNodes[i]).find(".userContentWrapper").each(function () {
            changeColors()
          });
      }
  }
  changeColors();
});

obs.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });


async function changeColors() {
    const collection = await document.querySelectorAll(".smECzc"); 
    console.log(collection);
    
    for (let i = 0; i < collection.length; i++) {
      let currentElement = collection[i]
      currentElement.classList.remove('smECzc');
      currentElement.classList.remove('PT41Tc');
      let color = currentElement.getElementsByClassName('ZWOtn')[0].getElementsByClassName("VlNR9e")[0].style.borderBottomColor
      currentElement.getElementsByClassName('ZWOtn')[0].style.display = "none";

      currentElement.style.backgroundColor = color;
      //currentElement.style.borderRadius = "10px";
     console.log(currentElement.classList);

    }
  }