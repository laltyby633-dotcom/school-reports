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

                <img src="${imageURL}" alt="شاهد ${i + 1}">

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

    margin: 8mm;

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

    font-size: 12px;

}

.school-header {

    position: relative;

    height: 90px;

    margin-bottom: 4px;

}

.school-info {

    position: absolute;

    right: 0;

    top: 0;

    text-align: right;

    font-weight: bold;

    line-height: 1.4;

}

.logo-area {

    position: absolute;

    left: 50%;

    top: 0;

    transform: translateX(-50%);

    text-align: center;

}

.logo-area img {

    width: 100px;

    height: auto;

}

h1 {

    text-align: center;

    color: #2e7d32;

    font-size: 19px;

    margin: 4px 0 7px;

}

.form-table {

    width: 100%;

    border-collapse: collapse;

    table-layout: fixed;

}

.form-table td {

    width: 50%;

    border: 1px solid #2e7d32;

    padding: 5px;

    vertical-align: top;

    background: #f1f8f2;

    height: 45px;

}

.label {

    color: #2e7d32;

    font-weight: bold;

    margin-bottom: 3px;

}

.value {

    background: white;

    border: 1px solid #a5cfa7;

    border-radius: 3px;

    padding: 4px;

    min-height: 18px;

    white-space: pre-wrap;

    word-wrap: break-word;

}

.full-row {

    width: 100%;

    border: 1px solid #2e7d32;

    background: #f1f8f2;

    padding: 5px;

}

.full-row .value {

    min-height: 25px;

}

.evidence-page {

    margin-top: 6px;

}

.evidence-title {

    border: 1px solid #2e7d32;

    background: #f1f8f2;

    color: #2e7d32;

    font-weight: bold;

    padding: 5px;

    margin-bottom: 4px;

}

/* شبكة الصور */

.evidence-image {

    display: inline-block;

    width: 23%;

    margin: 0.5%;

    text-align: center;

    vertical-align: top;

    page-break-inside: avoid;

}

.evidence-image img {

    width: 100%;

    height: 70px;

    object-fit: contain;

    border: 1px solid #a5cfa7;

    padding: 2px;

    background: white;

}

.signatures {

    display: flex;

    justify-content: space-between;

    margin-top: 8px;

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
