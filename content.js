const getImageRatio = (image) => {
  return Number(image.naturalWidth / image.naturalHeight).toFixed(2)
}

const updateImageRatio = (event) => {
  console.log('over')
  chrome.runtime.sendMessage({type: 'ratio', options: { 
    type: 'basic', 
    message: getImageRatio(event.target),
  }})
}

for (const image of document.getElementsByTagName('img')) {
  console.log(image)
  image.onmouseover = updateImageRatio
}