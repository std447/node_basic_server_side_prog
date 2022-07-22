window.onload = function (){
    console.log("DOM content loaded");
    // document.getElementById('my_name').innerHTML = '';
    // document.getElementById('my-status').innerHTML = '';

    fetch('/status').then((res)=>{
        res.json().then((data)=>{
            console.log(data);
            document.getElementById('my-name').innerHTML = data['name'] + ": ";
            document.getElementById('my-status').innerHTML = data['status'];
        })
    })
}