
    const btn = document.querySelector('.option')
    btn.addEventListener('change', function(e){
        document.body.classList.toggle("dark", e.target.checked)
        console.log(btn)
    })
