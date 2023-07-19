
function calculateBMI(weight, height) {
  var heightInMeters = height / 100;

  var bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
}

function displayBMIResult(bmi, gender) {
  var resultElement = document.getElementById("result");
  var message;

  if (gender === "male") {
    if (bmi < 20.7) {
      message = "KG Anda Terlalu Kurus... Coba makan dah karena anda Termasuk di dalam kategori Kekurangan berat badan cara terbaik untuk menaikan berat badan adalah mengkonsumsi makanan yang mengandung banyak nutrisi yang dibutuhkan.";
    } else if (bmi < 26.4) {
      message = "KG Berat badan anda termasuk ideal tetap pertahankan dengan cara mengonsumsi makanan yang sehat, dan sering olahraga minimal 1 jam sehari";
    } else if (bmi < 27.8) {
      message = "KG Agak berat berat badan anda agak berlebih ini bisa anda kurangi dengan sering olahraga dan melakukan diet atau mengonsumsi sayur dan buah";
    } else if (bmi < 31.1) {
      message = "KG Terlalu Berat. berat badan anda agak berlebih, cobalah untuk makan sayur-sayuran dan buah-buahan, lalu perbanyak aktifitas fisik seperti olahraga";
    } else {
      message = "KG Obesitas sia boyyyy";
    }
  } else {
    if (bmi < 19.1) {
      message = "KG Anda Terlalu Kurus... Coba makan dah karena anda Termasuk di dalam kategori Kekurangan berat badan cara terbaik untuk menaikan berat badan adalah mengkonsumsi makanan yang mengandung banyak nutrisi yang dibutuhkan.";
    } else if (bmi < 25.8) {
      message = "KGB erat badan anda termasuk ideal tetap pertahankan dengan cara mengonsumsi makanan yang sehat, dan sering olahraga minimal 1 jam sehari";
    } else if (bmi < 27.3) {
      message = "KG Agak berat berat badan anda agak berlebih ini bisa anda kurangi dengan sering olahraga dan melakukan diet atau mengonsumsi sayur dan buah";
    } else if (bmi < 32.3) {
      message = "KG Terlalu Berat. berat badan anda agak berlebih, cobalah untuk makan sayur-sayuran dan buah-buahan, lalu perbanyak aktifitas fisik seperti olahraga";
    } else {
      message = "KG Obesitas sia boyyyy";
    }
  }

  resultElement.textContent = "Hasil BMI: " + bmi + " (" + message + ")";
}
function handleFormSubmit(event) {
  event.preventDefault();

  var weightInput = document.getElementById("weight");
  var heightInput = document.getElementById("height");
  var genderInput = document.getElementById("gender");

  var weight = parseFloat(weightInput.value);
  var height = parseFloat(heightInput.value);
  var gender = genderInput.value;

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid weight and height.");
    return;
  }

  var bmi = calculateBMI(weight, height);
  displayBMIResult(bmi, gender);
}
var bmiForm = document.getElementById("bmiForm");
bmiForm.addEventListener("submit", handleFormSubmit);
