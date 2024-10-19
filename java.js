
const loadAllBtn=()=>{
     fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
     .then(res=>res.json())
     .then(data=>displayBtn(data.categories))
}
const displayBtn=(allData)=>{
     console.log(allData)
     allData.forEach(singleBtn => {
         
          const btn=document.getElementById('btn4')
          const buttonContainer=document.createElement('div')
          buttonContainer.innerHTML=`
          <div>
          <button onclick="showCategoryData('${singleBtn.category}')" class="btn flex lg:w-44  text-2xl items-center">
          <img class="h-10 w-10" src=${singleBtn.category_icon} alt=""> ${singleBtn.category}               
          </button>
          </div>
          `
          btn.appendChild(buttonContainer)
     })
     }
//////
const loadPhoto=()=>{
     // terget point 
document.getElementById('spnner').classList.add("hidden")
     fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
     .then(res=>res.json())
     .then(data=>loadSinglePhotoShow(data.pets))
}
const loadSinglePhotoShow=(allShowData)=>{
     console.log(allShowData)
     allShowData.forEach((allNewData)=>{
const photoContainers=document.getElementById('allPhoto')

          const div=document.createElement('div')         
          div.classList="card card-compact bg-base-100  shadow-xl"
          div.innerHTML=`
          <figure class="h-[300px]">
    <img
      src=${allNewData.image}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"> ${allNewData.pet_name||"N/A"}</h2>
    <div class="flex gap-2">
      <img src="images/Frame.png" alt="">
      <p>Breed : ${allNewData.breed ||"N/A"}</p>
      </div>
      <div class="flex gap-2">
     <img src="images/Frame (1).png" alt="">
     <p>Birth : ${allNewData.date_of_birth ||"N/A"}</p>
     </div>
      <div class="flex gap-2">
       <img src="images/Frame (2).png" alt="">
      <p>Gender: ${allNewData.gender ||"N/A"}</p>
       </div>
       <div class="flex gap-2">
        <img src="images/Vector.png" alt="">
      <p> Price : ${allNewData.price ||"N/A"}</p>
      </div>

     <div class="flex gap-3 justify-between">
          <div class="card-actions ">
        <button onclick="addImg('${allNewData.image }')" class="btn ">
          <img src="images/Frame 117.png" alt="">
        </button>
        </div>
        <div class="card-actions justify-end">
        <button onclick="showAdopt('${allNewData.petId}')" class="btn ">Adopt</button>
        <div class="card-actions justify-end">
        <button onclick="showDetails('${allNewData.petId}')" class="btn">Details</button>
      </div>
       </div>
  </div>
          `
          photoContainers.appendChild(div)
     })
}
/////////////
const showCategoryData=(category)=>{
     document.getElementById('allPhoto').classList.add('hidden')
document.getElementById('spnner').classList.remove("hidden")
document.getElementById('spnner').classList.add("block")
      fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then(res=>res.json())
      .then(animal=>{
          setTimeout(() => {
               displyPhoto(animal.data)
          }, 2000);
      })
}
const displyPhoto=(photoes)=>{
     console.log(photoes)
     document.getElementById('allPhoto').classList.remove('hidden')

const photoContainer=document.getElementById('allPhoto')
photoContainer.innerHTML="";
document.getElementById('spnner').classList.add("hidden")
document.getElementById('spnner').classList.remove("block")
if(photoes.length == 0){
     photoContainer.innerHTML=`
    <div class="col-span-4 py-40 rounded-lg bg-gray-50">
    <div class="text-center ">
     <img class="mx-auto" src="images/Group.png" alt="">
     <h3 class="font-semibold text-2xl">No Information Available</h3>
     <p class="text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br>
      its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    </div>
     `
     return
}
photoes.forEach(photo=>{   
const div=document.createElement('div')         
div.classList="card card-compact bg-base-100  shadow-2xl"
div.innerHTML=`
<figure class="h-[300px]">
    <img
      src=${photo.image}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title"> ${photo.pet_name ||"N/A"}</h2>
    <div class="flex gap-2">
      <img src="images/Frame.png" alt="">
      <p>Breed : ${photo.breed}</p>
      </div>
      <div class="flex gap-2">
     <img src="images/Frame (1).png" alt="">
     <p>Birth : ${photo.date_of_birth ||"N/A"}</p>
     </div>
      <div class="flex gap-2">
       <img src="images/Frame (2).png" alt="">
      <p>Gender: ${photo.gender ||"N/A"}</p>
       </div>
       <div class="flex gap-2">
        <img src="images/Vector.png" alt="">
      <p> Price : ${photo.price ||"N/A"}</p>
      </div>

     <div class="flex gap-3 justify-between">
          <div class="card-actions ">
        <button onclick="addImg('${photo.image}')" class="btn ">
          <img src="images/Frame 117.png" alt="">
        </button>
        </div>
        <div class="card-actions justify-end">
        <button onclick= "showAdopt('${photo.petId}')" class="btn ">Adopt</button>
        <div class="card-actions justify-end">
        <button onclick="showDetails('${photo.petId}')" class="btn">Details</button>
      </div>
       </div>
  </div>
          `
          photoContainer.appendChild(div)
     })
     document.getElementById('spnner').classList.add("hidden")
document.getElementById('spnner').classList.remove("block")
}
//////
const showDetails=(nam)=>{
     fetch(`https://openapi.programming-hero.com/api/peddy/pet/${nam}`)
     .then(res=>res.json())
     .then(data=>allPetData(data.petData))    
}
const allPetData=(singleId)=>{
const modalContaimer=document.getElementById('customModal')
modalContaimer.innerHTML=
`<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
  <img class="h-full w-full rounded-xl mb-5" src="${singleId.image}" alt="">
    <h3 class="text-3xl font-bold mb-5">${singleId.pet_name}</h3>
    <div class="flex justify-between mb-5 border-b border-gray-200">
 <div>
      <div class="flex gap-2">
           <img src="images/Frame.png" alt="">
           <p>Breed : ${singleId.breed}</p>
           </div>
            <div class="flex gap-2">
            <img src="images/Frame (2).png" alt="">
           <p>Gender: ${singleId.gender}</p>
            </div>
            <div class="flex gap-2">
            <img src="images/Frame (2).png" alt="">
           <p>Vaccinated status: ${singleId.vaccinated_status}</p>
            </div>
   </div>
      <div>
           <div class="flex gap-2">
                <img src="images/Frame (1).png" alt="">
                <p>Birth : ${singleId.date_of_birth}</p>
                </div>
                <div class="flex gap-2">
                     <img src="images/Vector.png" alt="">
                 <p> Price : ${singleId.price}</p>
                 </div>
                              </div>
                       </div>
                       <p>Details Information:
                       
                        ${singleId.pet_details}
                       </p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
`
my_modal_1.showModal()
}
///////////////////////
const showAdopt=(adoptId)=>{
     console.log(adoptId)
     const adoptContainer=document.getElementById('customModal2')
     adoptContainer.innerHTML=`
      <dialog id="my_modal_2" class="modal">
  <div class="modal-box text-center">
  <img class="mx-auto" src="images/icons8-handshake-64.png" alt="">
    <h3 class="text-3xl font-bold mb-6">Congrats!</h3>
    <p>Aportion process start for your pet</p>
    <h1 id="countdown">3</h1>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog> 
     ` 
     my_modal_2.showModal()
}

const addImg=(img)=>{
     // console.log(img)
     const handelImgo=document.getElementById('photoShower')
     const imgPostion=document.createElement('div')
     imgPostion.innerHTML=`
     <span class="w-full ">
     <img class="h-[200px] w-[200px] object-cover rounded-xl" src="${img}" alt="">
     </span>
     `
     handelImgo.appendChild(imgPostion)
}
////////////////
loadAllBtn()
loadPhoto()
document.getElementById('viewDeatails').addEventListener('click',()=> {
     document.getElementById('main-section').scrollIntoView({ behavior: 'smooth' });
 });