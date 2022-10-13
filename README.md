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

- Align items vs Align content

  ```
  align-items: aligns the items along the cross axis (perpendicular to the main axis).
  align-content: aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. when multiple line of flex items are present.
  ```

- Describe flexbox items properties and flexbox container properties

  ```
  Flexbox items properties: order, flex-grow, flex-shrink, flex-basis, flex, align-self
  Flexbox container properties: flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content
  order: specifies the order of the flex item, and the items will be displayed in the order specified.
  flex-grow: specifies how much the item will grow relative to the rest of the flexible items inside the same container.
  flex-shrink: specifies how the item will shrink relative to the rest of the flexible items inside the same container.
  flex-basis: specifies the initial length of a flexible item.
  flex: is a shorthand property for flex-grow, flex-shrink and flex-basis combined.
  align-self: allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
  flex-direction: specifies the direction of the flexible items.
  flex-wrap: specifies whether the flexible items should wrap or not.
  flex-flow: is a shorthand property for the flex-direction and the flex-wrap properties.
  justify-content: specifies the alignment along the main axis.
  align-items: specifies the alignment along the cross axis.
  align-content: specifies the alignment along the cross axis when there is extra space in the cross-axis.
  ```
