let exams = [
    { subject:"Математика", date:"2025.09.12", room:"115" },
    { subject:"Обчислювальний інтелект", date:"2025.09.14", room:"206" },
    { subject:"Дискретна математика", date:"2025.09.19", room:"" }
];


let html = "";


function ras_diff_Days(text) {
    const currentDate = new Date();
    const date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    const timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000*3600*24))-1;
    return daysDiff;
}

function vivod(item, i, array) {
    const text = item['Data'];
    const diffDays = ras_diff_Days(text);
    if (diffDays <5 && diffDays >0) {
     html = html + "<tr>";
    } else if (diffDays === 0) {
        html = html + "<tr style='background: pink'>";
    } else {
        if (diffDays > 5) {
            html = html + "<tr style='background: darkred'>";

        }
    }
}
