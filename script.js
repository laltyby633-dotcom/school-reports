function showReport() {

    document.getElementById("home").style.display = "none";

    document.getElementById("reportPage").style.display = "block";

}

function createPDF() {

    const title = document.getElementById("title").value;

    const process = document.getElementById("process").value;

    const day = document.getElementById("day").value;

    const date = document.getElementById("date").value;

    const target = document.getElementById("target").value;

    const targetCount = document.getElementById("targetCount").value;

    const goal = document.getElementById("goal").value;

    const notes = document.getElementById("notes").value;

    const procedures = document.getElementById("procedures").value;

    const recommendations = document.getElementById("recommendations").value;

    const reportWriter = document.getElementById("reportWriter").value;

    const schoolPrincipal = document.getElementById("schoolPrincipal").value;

    const images = document.getElementById("images").files;

    let imageHTML = "";

    for (let i = 0; i < images.length; i++) {

        const imageURL = URL.createObjectURL(images[i]);

        imageHTML += `

            <div class="evidence-image">

                <img src="${imageURL}" alt="شاهد">

            </div>

        `;

    }

    const report = `

<!DOCTYPE html>

<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<title>${title || "التقرير"}</title>

<style>

@page {

    size: A4;

    margin: 10mm;

}

* {

    box-sizing: border-box;

}

body {

    font-family: Arial, Tahoma, sans-serif;

    direction: rtl;

    margin: 0;

    padding: 0;

    color: #333;

    background: white;

    font-size: 13px;

}

.school-header {

    position: relative;

    height: 105px;

    margin-bottom: 5px;

}

.school-info {

    position: absolute;

    right: 0;

    top: 0;

    text-align: right;

    font-weight: bold;

    line-height: 1.5;

}

.logo-area {

    position: absolute;

    left: 50%;

    top: 0;

    transform: translateX(-50%);

    text-align: center;

}

.logo-area img {

    width: 115px;

    height: auto;

}

h1 {

    text-align: center;

    color: #2e7d32;

    font-size: 20px;

    margin: 5px 0 10px;

}

.form-table {

    width: 100%;

    border-collapse: collapse;

    table-layout: fixed;

}

.form-table td {

    width: 50%;

    border: 1px solid #2e7d32;

    padding: 7px;

    vertical-align: top;

    background: #f1f8f2;

    height: 55px;

}

.label {

    color: #2e7d32;

    font-weight: bold;

    margin-bottom: 4px;

}

.value {

    background: white;

    border: 1px solid #a5cfa7;

    border-radius: 4px;

    padding: 5px;

    min-height: 22px;

    white-space: pre-wrap;

    word-wrap: break-word;

}

.full-row {

    width: 100%;

    border: 1px solid #2e7d32;

    background: #f1f8f2;

    padding: 7px;

}

.full-row .value {

    min-height: 35px;

}

.evidence-page {

    margin-top: 7px;

}

.evidence-title {

    border: 1px solid #2e7d32;

    background: #f1f8f2;

    color: #2e7d32;

    font-weight: bold;

    padding: 7px;

    margin-bottom: 5px;

}

.evidence-image {

    display: inline-block;

    width: 30%;

    text-align: center;

    margin: 3px;

    vertical-align: top;

    page-break-inside: avoid;

}

.evidence-image img {

    width: 100%;

    max-height: 90px;

    object-fit: contain;

}

.signatures {

    display: flex;

    justify-content: space-between;

    margin-top: 10px;

    page-break-inside: avoid;

}

.signature {

    width: 40%;

    text-align: center;

    font-weight: bold;

}

@media print {

    * {

        -webkit-print-color-adjust: exact !important;

        print-color-adjust: exact !important;

    }

    body {

        background: white !important;

    }

}

</style>

</head>

<body>

<div class="school-header">

    <div class="school-info">

        <div>المملكة العربية السعودية</div>

        <div>وزارة التعليم</div>

        <div>الإدارة العامة للتعليم بجدة</div>

        <div>الابتدائية الثانية عشرة والروضة الملحقة</div>

    </div>
    <div class="logo-area">

        <img src="logo.jpg" alt="شعار وزارة التعليم">

    </div>

</div>

<h1>${title || "التقرير"}</h1>

<table class="form-table">

<tr>

    <td>

        <div class="label">اسم العملية</div>

        <div class="value">

            ${process || ""}

        </div>

    </td>

    <td>

        <div class="label">اليوم</div>

        <div class="value">

            ${day || ""}

        </div>

    </td>

</tr>

<tr>

    <td>

        <div class="label">التاريخ</div>

        <div class="value">

            ${date || ""}

        </div>

    </td>

    <td>

        <div class="label">الفئة المستهدفة</div>

        <div class="value">

            ${target || ""}

        </div>

    </td>

</tr>

<tr>

    <td>

        <div class="label">عدد المستهدفين</div>

        <div class="value">

            ${targetCount || ""}

        </div>

    </td>

    <td>

        <div class="label">الهدف</div>

        <div class="value">

            ${goal || ""}

        </div>

    </td>

</tr>

<tr>

    <td>

        <div class="label">الملاحظات</div>

        <div class="value">

            ${notes || ""}

        </div>

    </td>

    <td>

        <div class="label">الإجراءات</div>

        <div class="value">

            ${procedures || ""}

        </div>

    </td>

</tr>

</table>

<div class="full-row">

    <div class="label">التوصيات</div>

    <div class="value">

        ${recommendations || ""}

    </div>

</div>

<div class="evidence-page">

    <div class="evidence-title">

        الشواهد (صور)

    </div>

    ${imageHTML}

    <div class="signatures">

        <div class="signature">

            معد التقرير

            <br><br>

            ${reportWriter || ""}

        </div>

        <div class="signature">

            مديرة المدرسة

            <br><br>

            ${schoolPrincipal || ""}

        </div>

    </div>

</div>

</body>

</html>

`;

    const newWindow = window.open("", "_blank");

    if (!newWindow) {

        alert("يرجى السماح بفتح النوافذ المنبثقة للموقع.");

        return;

    }

    newWindow.document.open();

    newWindow.document.write(report);

    newWindow.document.close();

    setTimeout(function () {

        newWindow.focus();

        newWindow.print();

    }, 1500);

}