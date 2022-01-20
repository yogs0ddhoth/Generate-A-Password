# Make A Password 


## The Application
When opened, the application in its current styling will appear as follows:

![The Password Generator application displays a red button to "Generate Password".](assets\images\preview.png)

### Functionality 

When the "Generate Password" button is clicked, the program will run:

![Select Password Length.](assets\images\password-length.png)

The user will be prompted to select a password length between 8 and 128 characters.

![Error! Choose a number between 8 and 128.](assets\images\error1.png) 

If the password length criteria are not met, an error will be displayed, and the program will restart. 

Once the length is chosen, the user will be prompted to select character types: 

![Do you want your password to include Uppercase Letters?](assets\images\uppercase-check.png)
![Do you want your password to include Lowercase Letters?](assets\images\lowercase-check.png)
![Do you want your password to include Numbers?](assets\images\number-check.png)
![Do you want your password to include Special Characters?](assets\images\special-char-check.png) 

Failure to do so will prompt an error, and the program will restart.

![Error! Choose Characters](assets\images\error2.png) 

If all steps are followed, and all criteria are met, the program will generate a password and display it in the application 
![Password](assets\images\password.png) 

All major steps are logged in the console for ease of debugging 
![console](assets\images\console.png) 

### Future Updates 

* Update JavaScript to include API's that will enhance interface 
* Include a truly random character selection method, like Crypto
* Update CSS 

## MIT License ##

Copyright (c) 2022 Ben Lin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
