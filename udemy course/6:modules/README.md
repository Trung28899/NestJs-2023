# Section 6: Dependencies Injection Between Modules

- This section show how dependencies injection works between different modules

- Code base explanation:

  - In this folder, we're going to model a computer
  - See the diagram.png file to see the connectivities between different modules

- Steps to setup dependencies injection betweeen different modules
  - Step 1: add the PowerService to the PowerModule list of exports. PowerService should have @Injectable() on top
  - Step 2: import the PowerModule into the CpuModule
  - Step 3: define the constructor method on CpuService and add PowerService to it
