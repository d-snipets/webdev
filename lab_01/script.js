const exams = [
    { subject:"Математика", date:"17.09.2025", room:"115" },
    { subject:"Обчислювальний інтелект", date:"20.09.2025", room:"206" },
    { subject:"Дискретна математика", date:"22.09.2025", room:"" }
];


let html = "";


function ras_diff_Days(text) {
    const currentDate = new Date();
    const date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    const timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000*3600*24));
    return daysDiff;

}

function vivod(item, i, array) {

}

function updatedata () {

    for (const exam of exams) {
        console.log(exam);
        console.log(ras_diff_Days(exam.date))
    }

}