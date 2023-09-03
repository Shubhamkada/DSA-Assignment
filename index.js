// Question 1-----------------------------

function printPairs(arr1, p, sum) {
    let count = 0;
    for (let i = 0; i < p; i++)
      for (let j = i + 1; j < p; j++)
        if (arr1[i] + arr1[j] == sum)
          document.write("(" + arr1[i] + ", " + arr1[j] + ")" + "<br>");
  }
  
  let arr1 = [1, 5, 7, -1, 5];
  let p = arr1.length;
  let sum = 6;
  printPairs(arr1, p, sum);
  
  // Question 2----------------------------
  
  function rvereseArray(arr, start, end) {
    while (start < end) {
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  function printArray(arr, size) {
    for (var i = 0; i < size; i++) {
      console.log(arr[i]);
    }
  }
  
  var arr = [1, 2, 3, 4, 5, 6];
  var n = 6;
  
  printArray(arr, n);
  
  rvereseArray(arr, 0, n - 1);
  
  console.log("Reverse array is");
  
  printArray(arr, n);
  
  // Question 3----------------------------
  
  function areRotations(str1, str2) {
    return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
  }
  
  var str1 = "AACD";
  var str2 = "ACDA";
  
  if (areRotations(str1, str2))
    document.write("Strings are rotations of each other");
  else document.write("Strings are not rotations of each other");
  
  // Question 4-----------------------------
  
  const string = "String";
  let index = -1;
  let fnc = " ";
  
  if (string.length == 0) {
    console.log("EMPTY STRING");
  }
  
  for (let i of string) {
    if (string.split(i).length - 1 === 1) {
      fnc = i;
      break;
    } else {
      index += 1;
    }
  }
  if (index === string.length - 1) {
    console.log("All character are repeating.");
  } else {
    console.log(`First non-repeating character is ${fnc}`);
  }
  
  // Question 5-----------------------------
  
  function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 0) {
      return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    document.write(
      "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "<br/>"
    );
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
  }
  
  var N = 3;
  towerOfHanoi(N, "A", "C", "B");
  
  // Question 6---------------------------
  
  function isOperator(x) {
    switch (x) {
      case "+":
      case "-":
      case "/":
      case "*":
        return true;
    }
    return false;
  }
  
  function postToPre(post_exp) {
    let s = [];
  
    let length = post_exp.length;
  
    for (let i = 0; i < length; i++) {
      if (isOperator(post_exp[i])) {
        let op1 = s[s.length - 1];
        s.pop();
        let op2 = s[s.length - 1];
        s.pop();
  
        let temp = post_exp[i] + op2 + op1;
  
        s.push(temp);
      } else {
        s.push(post_exp[i] + "");
      }
    }
  
    let ans = "";
    while (s.length > 0) ans += s.pop();
    return ans;
  }
  
  let post_exp = "ABC/-AK/L-*";
  
  document.write("Prefix : " + postToPre(post_exp));
  
  // Question 7---------------------------
  
  function isOperator(x) {
    switch (x) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
      case "%":
        return true;
    }
    return false;
  }
  function convert(str) {
    let stack = [];
  
    let l = str.length;
  
    for (let i = l - 1; i >= 0; i--) {
      let c = str[i];
  
      if (isOperator(c)) {
        let op1 = stack[stack.length - 1];
        stack.pop();
        let op2 = stack[stack.length - 1];
        stack.pop();
  
        let temp = "(" + op1 + c + op2 + ")";
        stack.push(temp);
      } else {
        stack.push(c + "");
      }
    }
    return stack[stack.length - 1];
  }
  
  let exp = "*-A/BC-/AKL";
  
  document.write("Infix : " + convert(exp));
  
  // Question8-----------------------------
  
  function areBracketsBalanced(s) {
    let i = -1;
    let stack = [];
    for (let ch of s) {
      if (ch === "(" || ch === "{" || ch === "[") {
        stack.push(ch);
        i++;
      } else {
        if (
          i >= 0 &&
          ((stack[i] === "(" && ch === ")") ||
            (stack[i] === "{" && ch === "}") ||
            (stack[i] === "[" && ch === "]"))
        ) {
          stack.pop();
          i--;
        } else {
          return false;
        }
      }
    }
    return i === -1;
  }
  
  let expr = "{()}[]";
  if (areBracketsBalanced(expr)) console.log("  Brackets are Closed ");
  else console.log("  Brackets are not Closed");
  // Question 9----------------------------
  
  let st = [];
  
  function insert_at_bottom(x) {
    if (st.length == 0) st.push(x);
    else {
      let a = st.pop();
      insert_at_bottom(x);
  
      st.push(a);
    }
  }
  
  function reverse() {
    if (st.length > 0) {
      let x = st.pop();
      reverse();
  
      insert_at_bottom(x);
    }
  }
  
  st.push("1");
  st.push("2");
  st.push("3");
  st.push("4");
  
  document.write("Original Stack<br>");
  
  document.write(st.join(" ") + "<br>");
  
  reverse();
  
  document.write("Reversed Stack<br>");
  
  document.write(st.join(" "));
  
  // Question 10---------------------------
  class MyStack {
    constructor() {
      this.s = [];
      this.minEle;
    }
  
    getMin() {
      if (this.s.length == 0) console.log("Stack is empty");
      else console.log("Minimum Element in the stack is: ", this.minEle);
    }
  
    peek() {
      if (this.s.length == 0) {
        console.log("Stack is empty ");
        return;
      }
      let t = this.s[0];
  
      console.log("Top Most Element is: ");
  
      t < this.minEle ? console.log(this.minEle) : console.log(t);
    }
  
    pop() {
      if (this.s.length == 0) {
        console.log("Stack is empty ");
        return;
      }
      console.log("Top Most Element Removed: ");
      let t = this.s[0];
      this.s.shift();
  
      if (t < this.minEle) {
        console.log(this.minEle);
        this.minEle = 2 * this.minEle - t;
      } else console.log(t);
    }
  
    push(x) {
      if (this.s.length == 0) {
        this.minEle = x;
        this.s.unshift(x);
        console.log("Number taken: ", x);
        return;
      }
  
      // If new number is less than minEle
      else if (x < this.minEle) {
        this.s.unshift(2 * x - this.minEle);
        this.minEle = x;
      } else this.s.unshift(x);
  
      console.log("Number taken: ", x);
    }
  }
  
  let s = new MyStack();
  
  s.push(2);
  s.push(1);
  s.getMin();
  