const selectimg=document.querySelector(".si");
const inputfile=document.querySelector('#file');
const imgarea=document.querySelector('.imgarea')

selectimg.addEventListener('click',function(){
    inputfile.click();
})

inputfile.addEventListener('change',function(){
    const image=this.files[0];
    console.log(image);
    if(image.size < 2000000){
        const reader=new FileReader();
        reader.onload=()=>{
            const allimg=imgarea.querySelectorAll('img');
            allimg.forEach(item=> item.remove());
            const imgurl=reader.result;
            const img=document.createElement('img');
            img.src=imgurl;
            imgarea.appendChild(img);
            imgarea.classList.add('active');
            imgarea.dataset.img=image.name;
        }
        reader.readAsDataURL(image);
    }else{
        alert("Image size is more than 2MB");
    }
    
})