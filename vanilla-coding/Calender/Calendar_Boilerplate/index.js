console.log("hello, vanilla.");

const calender = document.querySelector("#calendar");

const date = new Date();
const month = date.getMonth();
const date_value = date.getDate();
const day = date.getDay();

const first = new Date(date.getFullYear(), date.getMonth(), 1);
const firstDay = first.getDay(); // 첫번째 날짜의 요일

const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const lastDate = last.getDate(); // 마지막 날짜의 일

const table = document.createElement("table");
calender.appendChild(table);

const tr1 = document.createElement("tr");
table.appendChild(tr1);

const td = document.createElement("td");

for (let i = 1; i <= lastDate; i++) {
  let tr;
}
