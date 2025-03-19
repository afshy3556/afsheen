document.addEventListener('DOMContentLoaded',()=>{
    const textInput=document.getElementById('textInput');
    const generateBtn=document.getElementById('generateBtn');
    const qrCodeContainer=document.getElementById('qrCode');

    const qrCode=  new  QRCodeStyling({
        width:300,
        height:300,
        dotsOptions:{
            color:"#000",
            type:"rounded",

        },
    });

    generateBtn.addEventListener('click',()=>{
        const inputValue =textInput.value.trim();
        if(inputValue){
            qrCode.update({
                data: inputValue,
            });
            qrCodeContainer.innerHTML="";
            qrCode.append(qrCodeContainer);
        }else{
            alert('please enter text or url')
        }
    });
    

    
});