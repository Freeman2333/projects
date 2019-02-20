
// var title = document.getElementsByClassName('accordion-title'),
//     cont = document.getElementsByClassName('accordion-cont'),
//     accordion = document.getElementById('accordion');

// console.log(accordion)
// accordion.addEventListener("click", function (e) {
//     if (e.target.classList.contains("accordion-title")){
//         for(i=0;i<title.length;i++){
//             title[i].classList.remove("active")
//         }
//         e.target.classList.add("active")
//     }
// })

var title = document.getElementsByClassName('accordion-title'),
    cont = document.getElementsByClassName('accordion-cont');

for(var i=0; i< title.length; i++){
    title[i].addEventListener('click',function () {
        var classes = this.getAttribute('class'),
            newClasses= '',
            classesArr = classes.split(' '),
            newClassesArr = classes.split(' ');
        for(var j = 0; j<classesArr.length;j++){
            if(classesArr[j] == 'active'){
               classesArr.splice([j],1); 
            }
        }
        if (classesArr.length === newClassesArr.length){
            classesArr.push('active');
            newClasses = classesArr.join(' ');
        }else{
            newClasses = classesArr.join(' ');
        }

        for(var l = 0; l<title.length;l++){
            oldClasses = title[l].getAttribute('class');
            oldClassesArr = oldClasses.split(' ');

            for(var k=0;k<oldClassesArr.length;k++){
                if(oldClassesArr[k]=='active'){
                    oldClassesArr.splice([k],1);
                }
                oldClasses =oldClassesArr.join(' ');
                title[l].setAttribute('class',oldClasses);
            }
        }

        this.setAttribute('class',newClasses)
    })


}