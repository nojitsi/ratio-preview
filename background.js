chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'ratioPreview',
    title: 'Image ratio',
    contexts: ['image']
  })
  
  chrome.runtime.onMessage.addListener((message, sender, reply) => {
    console.log('message')
    if (message.type === 'ratio') {
      chrome.contextMenus.update(
        'ratioPreview',
        {
          title: 'Image ratio is: ' + message.options.message,
        },
      )
    }
  })
})