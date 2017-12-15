class Clipboard {
  static copy(text) {
    const element = document.createElement('textarea')
    element.textContent = text
    document.body.appendChild(element)
    element.select()
    document.execCommand('copy')
    document.body.removeChild(element)
  }
}
