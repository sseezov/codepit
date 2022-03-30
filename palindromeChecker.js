function palindrome(str) {
  let check1 = str.split(" ");
  let check2 = check1.map((item) => item.replace(/_|\,|\.|\-|\)|\(/g, ""));
  console.log(check2);
  let check3 = check2.join("").trim().toString().toLowerCase();
  let check4 = check2
    .join("")
    .trim()
    .split("")
    .reverse()
    .join("")
    .toString()
    .toLowerCase();

  if (check3 === check4) {
    return true;
  } else return false;
}
palindrome("eye");
