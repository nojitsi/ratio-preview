const getImageRatio = (image) => {
  return Number(image.naturalWidth / image.naturalHeight).toFixed(2)
}

const updateImageRatio = (event) => {
  chrome.runtime.sendMessage({type: 'ratio', options: { 
    type: 'basic', 
    message: getImageRatio(event.target),
  }})
}

for (const image of document.getElementsByTagName('img')) {
  image.onmouseover = updateImageRatio
}