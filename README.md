# nishant-jtg-pod

- CSS Box-Sizing: Content-Box

  ```
  Content-box is the default value of the size-boxing property. It works similar to what we have seen in the without box-sizing section. So, if you define the width of a div as 200px and then add 20px padding and 10px border to it, the finally rendered width will be greater than 200px, as per the calculations shown above. The same will be valid for height as well. Let’s look at the code for the same.
  ```

- CSS Box-Sizing: Border-Box

  ```The border-box value will include everything, content, padding, and border, within the height and width specified. It means that if you set the width to be 200px, the finally rendered element will not exceed 200px width and include the padding, border, and content within it. Let’s use the same example as for the content-box value, but this time with the border-box value.

  ```

- Why all the elements in the navbar are put in a list

  ```
  Putting a navigation structure, which is just a collection of hyperlinks, in a list is supposed to allow screen readers to pause between each link instead of reading all the links as a sentence. Semantically, this makes sense.
  ```
