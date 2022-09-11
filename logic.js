// var total=parseFloat(prompt('Enter total marks of CIE (30 or 40):\n'));
// if(total==40)
// {
    var marks1 = document.getElementById('int1');
    var marks2 = document.getElementById('int2');
    var result = document.getElementById('result');
    var form = document.getElementById('mainForm');
    var tmark1 = document.getElementById('outOf30');
    var tmark2 = document.getElementById('outOf40');
    
    
    // definning te func to be called when calculate is pressed
    var calculateResultFunction = function(event) {
    
        //if (!marks1.value || !marks2.value) {
            //alert("Please Enter the values");
        //} else {
            var x = parseFloat(marks1.value);
            var y = parseFloat(marks2.value);
            var sum = x + y;
            if (tmark2) {
                if (sum < 2) {
                    result.innerHTML = "You should have done well in CIE-1 and CIE-2";
                } else if (sum > 41) {
                    result.innerHTML = "Congratulations! You have already passed";
                } else {
                    var marks = 42 - sum;
                    result.innerHTML = "You must get " + marks + " marks in CIE-3 to pass. All the best.";
                }
            } else if (tmark1) {
                if (sum < 2) {
                    result.innerHTML = "You should have done well in CIE-1 and CIE-2";
                } else if (sum > 31) {
                    result.innerHTML = "Congratulations! You have already passed";
                } else {
                    var marks = 31.50 - sum;
                    result.innerHTML = "You must get " + marks + " marks in CIE-3 to pass. All the best.";
                }
            } else {
                alert('Enter total internal marks');
            }
    
            event.preventDefault();
        }
    
    //}
    
    // adding event listner to the type submit
    form.addEventListener('submit', calculateResultFunction);
    
    // var sum = (marks1 + marks2);
    // if(sum<2)
    // {
    // alert("You should have done well in CIE-1 and CIE-2\n");
    // }
    // else if(sum>41)
    // {
    // alert("You have already passed\n");
    // alert("Congratulations\n");
    // }
    // else
    // {
    // var marks=42-sum;
    // alert("Marks that you must get in CIE-3 is" +marks);
    // alert("All the best\n");
    // }
    // }
    // else
    // {
    // var marks1=parseFloat(prompt('Enter your CIE-1 marks out of 30:\n'));
    // var marks2=parseFloat(prompt('Enter your CIE-2 marks out of 30:\n'));
    // var sum=(marks1+marks2);
    // if(sum<2)
    // {
    // alert("You should have done well in CIE-1 and CIE-2\n");
    // }
    // else if(sum>41)
    // {
    // alert("You have already passed\n");
    // alert("Congratulations\n");
    // }
    // else
    // {
    // var marks=(31.50)-(sum);
    // alert("Marks that you must get in CIE-3 is" +marks );
    // alert("All the best\n");
    // }
    // }