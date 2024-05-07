//javascript

// Script for basic BMI Calculation
function calculateBMI() {
                        var weight = document.getElementById('weight').value;
                        var height = document.getElementById('height').value;
                        var age = document.getElementById('age').value;

                        if (weight > 0 && height > 0 && age > 0) {
                            var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
                            displayResult(bmi, age);
                        } else {
                            alert('Please enter valid weight, height, and age values.');
                        }
                }

                function displayResult(bmi, age) {
                    var resultElement = document.getElementById('result');
                    resultElement.innerHTML = 'Your BMI is: ' + bmi + ' (Age: ' + age + ' years)';
                }


// Script for BMR Calculations
function calculateBMR() {

                        var weight = document.getElementById('weight').value;
                        var height = document.getElementById('height').value;
                        var age = document.getElementById('age').value;
                        var gender1 = document.getSelection('gender1').checked; //Male
                        var gender2 = document.getSelection('gender2').checked; //Female

                        if (weight > 0 && height > 0 && age >0 && gender1 == checked) {

                            var bmr =  (88.362 + (13.397 * weight) +(4.799 * height) - (5.677 * age)).toFixed(2);
                        
                        }
                        
                        else if (weight > 0 && height > 0 && age >0 && gender2 == checked) {
                            
                            var bmr =  (447.593 + (9.247 * weight) +(3.098 * height) - (4.330 * age)).toFixed(2);
                        
                        } 

                        else {
                            alert('Please enter valid weight, height, and age values.');
                        }

                        bmrResult(bmr, age);
}
                        function bmrResult(bmr, age) {
                            var resultElement = document.getElementById('result');
                            resultElement.innerHTML = 'Your BMR is: ' + bmr + ' (Age: ' + age + ' years)';
                        }
