# Temperature Converter README

This repository contains code for a simple temperature converter web application. Users can input a temperature value in either Celsius, Fahrenheit, or Kelvin, and convert it to the other two temperature units. Below is an overview of the file structure, functionality, and code explanation.

## File Structure

- **index.html**: This is the main HTML file for the temperature converter.
- **styles.css**: This file contains the CSS styles used to style the temperature converter interface.
- **script.js**: This file contains JavaScript code used for the temperature conversion functionality.
- **footer**: A footer indicating the creator of the temperature converter.

## Functionality

- **Input**: Users can input a temperature value in degrees Celsius, Fahrenheit, or Kelvin.
- **Selection**: Users can choose the unit of the input temperature from a dropdown menu.
- **Conversion**: Upon clicking the "Convert" button, the input temperature is converted to the other two units based on the selected unit.
- **Result Display**: The converted temperatures are displayed below the input form.
- **Responsive Design**: The temperature converter is designed to be responsive and work well on various screen sizes.

## Usage

To use the temperature converter, open the `index.html` file in a web browser. Enter a temperature value, select the unit, and click the "Convert" button to see the converted temperatures.

## Code Explanation

The `convert()` function is responsible for taking the input temperature and converting it into different temperatures based on the selected unit. Here's a breakdown of the code within the `convert()` function:

The JavaScript code within the `convert()` function manages the temperature conversion process. It starts by retrieving the input temperature and selected unit from the form. Then, it verifies if the input is a valid number. Three functions (`fahrenheit()`, `celsius()`, and `kelvin()`) are defined to handle the conversions. Depending on the selected unit, the appropriate conversion function is called, and the result is displayed. If the unit is invalid or the input is not a number, an error message is shown. This JavaScript ensures accurate temperature conversion based on user input and provides feedback when needed.


## Demo video




## Demo
A live demo of this project can be found at 

