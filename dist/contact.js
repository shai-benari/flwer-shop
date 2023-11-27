function addRow() {
    var table = document.querySelector("#trainee") || null;
    addtraineeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var row = table.insertRow(-1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        var c5 = row.insertCell(4);
        var c6 = row.insertCell(5);
        var val0 = document.querySelector('#name').value || null;
        var val1 = document.querySelector('#unber-of-meetings').value || null;
        var val2 = document.querySelector('#email').value || null;
        var val3 = document.querySelector('#number-of-traines').value || null;
        var val4 = document.querySelector('#filed-of-prctis').value || null;
        var val5 = document.querySelector('#practic-zone">').value || null;
        c1.append(val0);
        c2.append(val1);
        c3.append(val2);
        c4.append(val3);
        c5.append(val4);
        c6.append(val5);
    });
}
;
addRow();
