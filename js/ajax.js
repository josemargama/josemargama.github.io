let content = document.getElementById('ajax-content')
alert("ola")
function fetchContent(el){
    let view = el.getAttribute('a-view')
    let folder =  el.getAttribute('a-folder')
    fetch(`/ajax/${folder}/${view}.html`)
    .then(response => {
        let html = response.text()
        return html
    })
    .then(html => {
        console.log(html)
        content.innerHTML = '<p>OLA MUNDO</p>'
    })
}