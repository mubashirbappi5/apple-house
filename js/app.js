document.getElementById("search-btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("testing btn")
    const loadingdiv = document.getElementById("loading")
    loadingdiv.classList.remove("hidden")
    loadingdiv.classList.add("flex")
    setTimeout(()=>{
        loadingdiv.classList.add("hidden")
        loadingdiv.classList.remove("flex")

       
    },3000)

})
console.log("hi")

const loadData = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const data = await res.json()
    console.log(data)
}
loadData()