let addbasket=document.querySelectorAll(".basket")
let butn=document.getElementById('butn')
let last=document.getElementById('last')
let price=document.getElementById('prictotl')
let totalp=document.getElementById('totalp')
let ul=document.getElementById('ull')
let prs=document.getElementById('prs')
let mas=document.getElementById('masj')
let form1=document.getElementById('form1')
let butend=document.getElementById('buttonf')
let formn=document.getElementById('form-n')
let formm=document.getElementById('form-n1')
let basket2=document.getElementById('basket2')
let butnf=document.getElementById('buttont')
let titel=null
let calcoletpr=0;
let consel=null

butn.onclick=function(){
     last.style.display='block' 
    
}
window.onscroll=function(){
    if(window.scrollY>20){
        last.style.display='none'   
    }
}
addbasket.forEach(function(but){
but.onclick=function(){
titel=this.getAttribute('title')
 calcoletpr+=Number(this.getAttribute('price'))
let li=document.createElement('li')
li.textContent=titel
ul.appendChild(li)
 totalp.style.display=ul.children.length>0?'block':'none'
 let delet=document.createElement('button')
 delet.textContent='الغاء الطلب'
 li.appendChild(delet)
 delet.classList.add('delet-btn')



 delet.onclick=function(){
 li.remove()
  let price=Number(but.getAttribute('price'))
  calcoletpr-=price
  consel.log('calcoletpr')
  prs.textContent=calcoletpr+'DYL';
}
}

totalp.onclick=function(){
prs.textContent=calcoletpr+' DYL'
mas1()
prs.style.padding='5px'
}
})
function mas1(){
mas.style.display='block'
}
mas.onclick=function(){
    form1.style.display='block'
    last.style.display='none'
}

butend.onclick=function(){
     updetData()
    let itmslest=""
    
    let lielment=ul.getElementsByTagName('li')
    for(let i=0; i<lielment.length;i++){
        let templi=lielment[i].cloneNode(true)
        let btn=templi.querySelector('button')
        if(btn) btn.remove()
        itmslest+="-"+templi.innerText.trim()+"\n"
    }
    let totalprice=prs.innerText
    let costomarname=formn.value
    if(costomarname.trim()===""||costomarname.trim().length<2){
        alert("يرجى كتابه اسم المستلم اولا قبل الارسال")
        formn.focus()
        return
    }
    
    
    let notes=formm.value
    let phonenumber="218924596858"
    let massage="طلب جديد:\n\n"+"الطلبات:\n"+itmslest+"\n"+"الاجمالي:"+totalprice+"\n"+"اسم المستلم:"+costomarname+"\n"+"الملاحضات:"+notes
    let encodmessage=encodeURIComponent(massage)
    window.open("https://wa.me/"+phonenumber+"?text="+encodmessage,"_blank")
}




function updetData(){
    prs.textContent=calcoletpr+' DYL'
}
butnf.onclick=function(){
    form1.style.display='none'
    last.style.display='block'
}