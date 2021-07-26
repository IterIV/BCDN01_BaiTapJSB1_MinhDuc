/**
 * Bài tập 1: Tính tiền lương nhân viên.
 * ---------- Mô hình 3 khối --------------------
 * Khối 1: Input
 * workDay
 * 
 * Khối 2: Các bước xử lý
 * B1: tạo và gán giá trị cho số ngày làm việc (workDay)
 * B2: tạo biến chứa lương trong ngày (salaryPerDay) và gán giá trị
 * salaryPerDay = 100.000
 * B3: tính lương theo công thức salary = salaryPerDay * workday;
 * B4: hiện kết quả lên console
 * 
 * Khối 3: Oupt
 * salary
 * 
 */


 var salaryPerDay = 100000;
 var workday = 2;
 var salary = salaryPerDay * workday;
 console.log("Bài 1: kết quả tính lương cho 2 ngày làm việc: " + salary);


 /**
  * Bài tập 2: Tính giá trị trung bình
  * ----------------- Mô hình 3 khối ------------------------------
  * Khối 1: Input
  * number1, number2, number3, number4, number5
  * 
  * Khối 2: Các bước xử lý
  * B1: tạo và gán giá trị 5 số thực cho 5 biến number1, number2, number3, number4, number5
  * B2: tạo và gán giá trị trung bình 5 số
  * average = (number1 + number2 + number3 + number4 + number5)/5
  * B3: hiện kết quả lên console
  * 
  * Khối 3: Ouput
  * average
  * 
  */

 var number1 = 2.1;
 var number2 = 4.5;
 var number3 = 6;
 var number4 = 4.3;
 var number5 = 8.5;
 var average = (number1 + number2 + number3 + number4 + number5)/5;
 console.log("Bài 2: trung bình cộng 5 số: " + average);
/**
 * Bài tập 3: quy đổi USD sang VND
 * --------------------------- Mô hình 3 khối ----------------------------------
 * Khối 1: Input
 * moneyUSD
 * 
 * Khối 2: Các bước xử lý
 * B1: khởi tạo và gán giá trị tỷ số USD/VND: exchangeRate = 23500
 * B2: khởi tạo và gán giá trị tiền bằng USD (moneyUSD)
 * B3: quy đổi USD sang VND moneyVND = exchangeRate * moneyUSD
 * B4: in kết quả ra console
 * 
 * Khối 3: Output
 * moneyVND
 */

var exchangeRate = 23500;
var moneyUSD = 3;
var moneyVND = moneyUSD * exchangeRate;
console.log("Bài 3: chuyển đổi USD->VND với 3 USD: " + moneyVND + "VND.")

/**Bài tập 4: Tính diện tích, chu vi hình chữ nhật
 * ------------------------ Mô hình 3 khối ---------------------
 * Khối 1: Input
 * lenghtVal, widthVal
 * 
 * Khối 2: Các bước xử lý
 * B1: khởi tạo và gán giá trị chiều dài, chiều rộng hình chữa nhật: lenghtVal, widthVal
 * B2: tạo và gán giá trị chu vi hình chữ nhật: 
 * perimeterVal = (lenghtVal + widthVal) * 2
 * B3: tạo và gán giá trị diện tích hình chữ nhật:
 * areaVal = lenghtVal * widthVal
 * B4: in kết quả ra console
 * 
 * Khối 3: Output
 * perimeterVal
 * areaVal
 */

var lenghtVal = 3;
var widthVal = 4;
var perimeterVal = (lenghtVal + widthVal) * 2;
var areaVal = lenghtVal * widthVal;
console.log("Bải 4: \n - Chu vi hình chữa nhật là: " + perimeterVal + "\n - Diện tích hình chữ nhật là: " + areaVal)

/**
 * Bài tập 5: Tính tổng 2 ký số
 * 
 * Khối 1: Input
 * numBT5
 * 
 * Khối 2: Các bước xử lý
 * B1: khởi tạo và gán giá trị số nhập vào (2 chữ số) numBT5
 * B2: Khởi tạo và lấy giá trị từ phần đơn vị:
 * secondNum = numBT5%10
 * B3: khởi tạo và lấy giá trị từ phần chục:
 * firstNum = (numBT5 - secondNum)/10;
 * B4: Khởi tạo và tính toán giá trị tổng 2 ký số:
 * sum = firstNum + secondNum
 * B5: in kết quả ra console
 * 
 * Khối 2: Output
 * sum
 * 
 */

var numBT5 = 45;
var secondNum = numBT5%10;
var firstNum = (numBT5 - secondNum)/10;
var sum = firstNum + secondNum;
console.log("Bài 5: tổng 2 ký số đối với số " + numBT5 + " là: " + sum);