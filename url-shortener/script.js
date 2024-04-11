function flink(){
    try{
        var link = "http://tinyurl.com/api-create.php";
        var url = link + "?" + new URLSearchParams({ url:document.getElementById("link").value}).toString();
        fetch(url)
            .then(response => {
                return response.text()
        })
            .then(htmlCode => {
                document.getElementById("re").value=htmlCode
                document.getElementById("re").focus()
            })
    } catch(error){
        document.getElementById("re").value="can't short this link"
        document.getElementById("re").focus()
    }
}