let paisA = 80000;
let paisB = 200000;
let anos = 0;

while (paisA < paisB) {
  paisA *= 1.03;
  paisB *= 1.015;
  anos++;
}

console.log("Serão necessários " + anos + " anos para que o país A ultrapasse ou iguale o país B.");
