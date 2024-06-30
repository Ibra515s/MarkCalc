        let modal = document.getElementById('myModal');
        let AddSub = document.getElementById('add');
        let addSubBtn = document.getElementById('addSub');
        AddSub.addEventListener('click', function(){
            modal.style.display ='block';
        })
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            if (event.target == document.getElementById('ProgModal')){
                document.getElementById('ProgModal').style.display = "none"
            }
        } 

        function closeModal(modalId){
            document.getElementById(modalId).style.display = 'none';
        }

        addSubBtn.addEventListener('click', function(){ 
            let subId = document.querySelectorAll('.subject').length + 1;
            let subName= document.getElementById('subname').value;
            let subHours= document.getElementById('subhours').value;
            let subDegree= document.getElementById('subdegree').value;
            let subDiv = document.createElement('div');
            subDiv.className='subject';
            subDiv.id= `sub-${subId}`;
            subDiv.innerHTML = `
            <span class="close" onclick='this.parentElement.remove()' style="cursor: pointer; color: #777; position: absolute; left: 10px; top: 5px;">✕</span>
            <label for="sub-${subId}-subname">اسم المادة:</label>
            <input type="text" id="sub-${subId}-subname" placeholder="اختياري" value='${subName}'>
            <label for='sub-${subId}-Hsub'>ساعات المادة:</label>
            <input type='text' id='sub-${subId}-Hsub' name='Hsub' value='${subHours}'>
            <label for='sub-${subId}-symbol'>الرمز:</label>
            <select id='sub-${subId}-symbol'>
                <option value='4'>A</option>
                <option value='3.75'>A-</option>
                <option value='3.5'>B+</option>
                <option value='3'>B</option>
                    <option value='2.75'>B-</option>
                    <option value='2.5'>C+</option>
                    <option value='2'>C</option>
                    <option value='1.75'>C-</option>
                    <option value='1.5'>D+</option>
                    <option value='1'>D</option>
                    <option value='0.75'>D-</option>
                    <option value='0.5'>F</option>
                </select>
            `
            document.getElementsByClassName('subjects')[0].appendChild(subDiv)
            document.getElementById(`sub-${subId}-symbol`).value = subDegree;
            modal.style.display = "none";
        })

        function calcDegree(){
            let Hdone = Number(document.getElementById('H-done').value);
            let Amark = Number(document.getElementById('R-mark').value) * Hdone;
            let Mark = 0;
            let Hours = 0;
            document.querySelectorAll('.subject').forEach(function(ele){
                let subjectDegree = document.querySelector(`#${ele.id}-symbol`).value;
                let subjectHours = document.querySelector(`#${ele.id}-Hsub`).value;
                // console.log('degree:', subjectDegree, '\n', 'Hours:', subjectHours)
                Mark+= (Number(subjectDegree) * Number(subjectHours))
                Hours+= Number(subjectHours)
            })
            document.getElementById('ProgModal').style.display = 'block'
            document.querySelector('#GPA-R p').innerHTML = ((Mark+Amark)/(Hours+Hdone)).toFixed(2);
            document.querySelector('#Deg-R p').innerHTML = (Mark/Hours).toFixed(2);
            // return alert("Your Degree Is: "+ (Mark/Hours).toFixed(2) + "\nYour Average Degree is: " + ((Mark+Amark)/(Hours+Hdone)).toFixed(2))
        }