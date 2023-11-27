function addRow() {
    var table = document.querySelector("table") || null;
    addActivityForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var row = table.insertRow(-1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        var val0 = document.querySelector('#date').value || null;
        var val1 = document.querySelector('#activity').value || null;
        var val2 = document.querySelector('#startTime').value || null;
        var val3 = document.querySelector('#endTime').value || null;
        c1.append(val0);
        c2.append(val1);
        c3.append(val2);
        c4.append(val3);
        function addHours(date, hours) {
            date.setTime(date.getTime() + hours * 60 * 60 * 1000);
            return date;
        }
    });
}
