
console.log("hi")

const loadData =  (status) =>{
  loading.style.display = "none"
 fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
 .then((res) => res.json())
 
 .then((data) =>
   
   {if(status){
     displayData(data.data)
     

   }
   
   else{
     displayData(data.data.slice(0,6))

   }
    
   })
 .catch((err)=>console.log(err))
}
const loadData2 = () =>{
 loadData(true)
 
 

}
const searchData  = (searchid) =>{
 loading.style.display = "none"
   const cardphone = document.getElementById("phone-card").style.display = "block"
  
 fetch(`https://openapi.programming-hero.com/api/phones?search=${searchid?searchid:"iphone"}`)
 .then((res) => res.json())
 .then((data) => displayData(data.data))
}


const displayData = (cards) =>{
 
 const phoneCard  = document.getElementById("phone-card")
 phoneCard.innerHTML = "";
 cards.forEach(card => {
   
   const carddiv = document.createElement('div')
   carddiv.classList.add("card" ,"bg-base-100",  "border")
   carddiv.innerHTML =`
   <figure class="px-2 py-2 ">
             <div class=" px-3 pt-3 bg-[#0D6EFD0D]"> 
                 <img
               src="${card.image}"
               alt="Shoes"
               class="rounded-xl" />
             </div>

           </figure>
           <div class="card-body items-center text-center">
             <h2 class="card-title">${card.phone_name}</h2>
             <p>There are many variations of passages of available, but the majority have suffered</p>
             <h4 class="font-bold text-xl">$999</h4>
             <div class="card-actions">
               <button class="btn btn-primary">Show Details</button>
             </div>
           </div>
           `
           phoneCard.append(carddiv)
   
 });

}
const handulesearch =()=>{
 const loading = document.getElementById("loading")
        loading.style.display = "block";
        const phoneCard2 = document.getElementById("phone-card")
  
const searchInput = document.getElementById("search-input").value


        setTimeout(()=>{
     
    
         searchData(searchInput)
    
        },3000)

}
loadData(false);






 
  
  
  



