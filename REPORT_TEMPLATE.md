# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Investment calculator

**What does your calculator do?**  
This calculator estimates how much money a user can accumulate over time by making monthly cotributions with a fixed annual interest rate. It simulates compound interest growth and shows the final amount after a selected number of years. 

---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
| Name | txt | User's name for personalized output |
| Monthly Contribution | USD ($) | Amount of money depozited every month |
| Interest rate | % per year | Annual interest rate applied to the savings |
| Period | Years | Total investment duration |

Explain in words:  
These inputs were chosen because they represent the main and basic factors that affect saving growth: how much money is added regularly, how long the money stays invested and the interest rate.The user name was included to make the result more personalized and user-friendly.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
The calculator uses compound interest applied monthly.

Monthly rate = annual rate / 12 
Total is updated every month using:

total = (total + monthlyPayment)×(1 + monthlyRate)

**Steps:**
1. Get input values from HTML  
2. Convert text inputs into numbers using JavaScript  
3. Convert annual interest rate into monthly rate 
4. Loop through each month of the investment period
5. Add the monthly contribution and apply interest
6. Store the final result in a variable  

---

## 4. Conditional Logic (if / else)

Explain how your program interprets the result.

I do not have any ranges, but the program checks input validty before performing calculations.

Conditions used: 
if any field is empty, then show error message
if numbers are negative, then show validation message 
Otherwise, perform calculation and show the result 

---

## 5. Output

What does your program show to the user?

- Final calculated savings amount 
- Personalized message with the user's name  
- Formatted currency value with commas for readability

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters zero?
  The problem calculates normally. Result will be zero or minimal growth depending on inputs.
  
- User enters negative number?
  The program stops calculation and displays an error message saying values cannot be negative.
  
- User leaves input empty?
  The program displays a message asking the user to fill all fields correctly.

This validation prevents unrealistic and broken calculations. 

---

## 7. Optional Features (If You Added Any)


- Personalized output
- Currency formatting   

---

## 8. How to Run the Project

1. Download or clone the project files 
2. Open `index.html` in browser  
3. Enter input values  
4. Click calculate button
5. View the result 

---

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes

- What you asked AI for
  To write a code and explain each line
  
- What you modified yourself
  Some features I want to see in the calculator
  
- What you fully understand now
  Simple syntax of html, css, javascript. How we run the program, how we should save and open it.

---

## 10. Reflection

What did you learn from this assignment?
I have learned that these 3 languages works together. That AI is a strong tool, which can easily handle with such problems, and ignore it completely is a big mistake, but I must remember about the understanding. The interesting fact: I thought I found a mistake in AI's explanation when it came to formula, I could not see any degrees, which are used in complex percents, but then I found out that the formula is replaced with simple calculations in a loop (permanent iterations).
