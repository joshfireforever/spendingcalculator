/*global $*/
$(document).ready(function() {
    
    //Global variables
    var inputArr = [];
    var usingDecimal = false;
    var sum = 0;
    
    $("#calcButton").on("click", processInput);
    
    function processInput() {
        
        if (!validateInput()) {
            $("#spendingFdbk").attr("class", "bg-danger text-white");
            $("#spendingFdbk").html("Please fill in all fields.");
            return;
        }
        
        $("#calcButton").html("Recalculate");
        
        sum = 0;
        var userInput = $("#arrField").val();
        inputArr = userInput.split(/\r|\r\n|\n/);
        
        parseSpending();
        
        if (usingDecimal)
            sum = sum.toFixed(2);
            
        $("#spendingFdbk").attr("class", "bg-info text-white");
        $("#spendingFdbk").html("Total: $" + sum);
    }
    
    function validateInput() {
        let isValid = true;
        
        if ($("#arrField").val() == "") {
            $("#arrField").css("border", "3px solid red");
            isValid = false;
        }
        else
            $("#arrField").css("border", "3px solid #006c70");
        
        return isValid;
    }
    
    function parseSpending() {
    
        //temp variable for characters
        let tempChar = '';
        //loop through each line
        for (let i=0; i<inputArr.length; i++) {
            

            //loop through each character
            line_loop:
            for (let j=0; j<inputArr[i].length; j++) {
                
                if (inputArr[i][0] != '$')
                {
                    break;
                }
                
                //if number then add first number add to temp char var
                if ((inputArr[i][j] >= '0') && (inputArr[i][j] <= '9')) {
                    
                    tempChar = inputArr[i][j];
                    
                    //loop through remaining char, checking for number or period
                    for (let k=j+1; k<(inputArr[i].length-j); k++) {
                        if ((inputArr[i][k] >= '0') && (inputArr[i][k] <= '9')) {
                            tempChar+=inputArr[i][k];
                        }
                        //process only the next 2 characters if a decimal appears
                        //then add to sum and skip to next line
                        else if (inputArr[i][k] == '.') {
                            tempChar+=inputArr[i][k];
                            usingDecimal = true;
                            
                            if ((inputArr[i][k+1] >= '0') && (inputArr[i][k+1] <= '9')) {
                                tempChar+=inputArr[i][k+1];
                            }
                            else {
                                tempChar+='00';
                                sum += Number(tempChar);
                                break line_loop;
                            }
                            
                            if ((inputArr[i][k+2] >= '0') && (inputArr[i][k+2] <= '9')) {
                                tempChar+=inputArr[i][k+2];
                            }
                            else {
                                tempChar+='0';
                            }
                            
                            sum += Number(tempChar);
                            break line_loop;
                        }
                        //or after reaching non-number without decimal, 
                        //add to sum and skip to next line
                        else {
                            sum += Number(tempChar);
                            break line_loop;
                        }
                    }
                    
                    //if single number, add to sum before next line
                    sum += Number(tempChar);
                }
            }
        }
    }
    
});