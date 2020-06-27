# Hello!

Thanks for participating in Summer Agency recruitment process. We have an assignment for you, so you can get to know the technologies used at our place and example of tasks we encounter!

## Brief

You will be working on a part of the app, which is responsible for gathering agreements for data processing by associated partners' departaments.

## Figma design project

We suggest that you register in Figma. It is free and will allow you to inspect the design.

<https://www.figma.com/file/vZNI6Xnv9B5vfUo7woqXDF/Front-Task-2MS>

Mobile design is prepared for devices smaller than 768px.

## Runtime requirements

### Browsers

Recent versions of Chrome, Firefox, Safari and Edge.

### Devices

**Your implementation does not need to be pixel perfect.** Please try to make it as responsive as you can with as few breakpoints as you can. We will mainly test on the following devices:
- Laptop 1440x900
- Laptop 1366x768
- iPad 768x1024 landscape and 1024x768 portrait
- iPhone 8 375x667

You do not need to care about devices smaller than 375px.

## Description

### Working with API

Please use [attached api mock](api/). Simulate that request for `Company` list takes at least 2 seconds to complete. Until it finishes, show an animating loader as presented on `Loading` artboard.

You will receive a list of companies. Every company has a list of departaments. You should present companies as checkbox lists and departaments as checkboxes. Departament has a `code`, which is the identifier of your checkbox and a `label`, which is the label for checkbox. You should use Company `name` to create a header over checkbox list.

### `<Checkbox>` and `<CheckboxList>` components

One of your main task is to prepare the `<Checkbox>` and the `<CheckboxList>` components, which will allow to build the box with agreements.

- Do not use any existing React checkbox components.
- We strongly encourage the use of native HTML `<input type="checkbox">`.
- Clicking on label should toggle checkbox value. You **are allowed** (and we encourage it) to use native HTML `<label>`.
- Changing value of a checkbox should not re-render other checkboxes or lists.
- Both `Checkbox` and `CheckboxList` need only to act as controlled inputs (you do not need to implement internal state).
- Assets to create both unchecked and checked checkboxes are available in [assets](assets/) directory.


Suggested interfaces for components' props:
```typescript
interface CheckboxProps {
  value: boolean;
  onChange: (v: boolean) => void;
  label?: ReactNode;
}

interface CheckboxListProps {
  items: { 
    id: string;
    label: ReactNode;
  }[];
  value: string[];
  onChange: (v: string[]) => void;
}
```

### Scrollable container

Please use [OverlayScrollbars](https://kingsora.github.io/OverlayScrollbars/) component.

### "Select all" checkbox

"Select all" checkbox should synchronize it's value with current state of other checkboxes. In other words, please cover following situations:
- Checking "Select all" should check all other checkboxes.
- Unchecking "Select all" should uncheck all other checkboxes.
- Checking all checkboxes should mark "Select all" as checked.
- If all checkboxes are checked, unchecking at least one of them should also uncheck "Select all".

### Confirming and saving selected options

On confirm, selected options should be persisted in `localStorage`. When entering app, it should be rehydrated with previous selections (if they exist).

### Extra tasks

- Make smooth transition between `Loading` and `Default` artboards.

## Technologies & tools

Consider using the following technologies & tools, which we use on daily basis:

- React (must-have)
- TypeScript (must-have)
- styled-components (must-have)
- prettier for code formatting
- eslint for static code analysis (with common react, typescript and prettier rules)
- git as repository for your code

---

Have fun coding! 👩‍💻👨‍💻
