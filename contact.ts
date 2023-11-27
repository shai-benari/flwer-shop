
function addRow() {
    let table = document.querySelector("#trainee") as HTMLTableElement || null;
 
    addtraineeForm!.addEventListener("submit", function (e) {
        e.preventDefault();
    let row = table.insertRow(-1); 
 
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    

    const val0 = document.querySelector('#name')!.value as HTMLInputElement || null;
    const val1 = document.querySelector('#unber-of-meetings')!.value as HTMLInputElement || null;
    const val2 = document.querySelector('#email')!.value as HTMLInputElement || null;
    const val3 = document.querySelector('#number-of-traines')!.value as HTMLInputElement || null;
    const val4 = document.querySelector('#filed-of-prctis')!.value as HTMLInputElement || null;
    const val5 = document.querySelector('#practic-zone">')!.value as HTMLInputElement || null;
    
 
    c1.append(val0);
    c2.append(val1);
    c3.append(val2);
    c4.append(val3);
    c5.append(val4);
    c6.append(val5);
  
    })};
    addRow();