---
title: "C Compilation Process Explained"
date: "2024-02-16"
slug: "c-compilation-process"
type: "blog"
author: "abderrahim amzaourou"
author_github: "https://github.com/abderrahimAMZ"
time : "10 min"
description: "C compilation process explained in details"
thumbnail: ../images/c-compilation-process/c-compilation-process-global.png
---

import CoolBear from '../src/components/CoolBear'
import CoolBearTip from '../src/components/CoolBearTip'
import SmartBear from '../src/components/SmartBear'


# Introduction


Ever wondered How C code compiles and runs 🤔 ?


In this blog, we will take a look at the C compilation process in details. We will start by explaining the different steps of the compilation process, then we will explain the different types of errors that can occur during the compilation process, and finally, we will explain the different types of files that are generated during the compilation process.

<p className="mt-10"></p>
!["picture explaining the c compilation process"](../images/c-compilation-process/c-compilation-process-global.png)
<p className="mt-10"></p>

as you see in the picture above, the C compilation process is divided into 5 main steps:

1. Preprocessing
2. Compilation
3. Assembly
4. Linking
5. Execution

which we will explain in details in the following sections.

## Prerequisites

Before you start, make sure you have the following:

- a linux based operating system. If you don't have one, consider using a vm (virtual box or vmware or a remote machine that runs linux )
- GCC installed on your system. You can check this by running `gcc --version` in your terminal.
- Access to a Linux terminal. You can check your Linux kernel version by running `uname -a` in your terminal.

# Preprocessing

**preprocessing** isn't part of the code compilation itself but from the compilation process as a whole,it happens before compilation and done by a software component called **preprocessor** which interprets **directives** such as **#define**, **#include**.
remember that all directives starts with a **#** symbol.

there 4 main steps in the preprocessing phase:


1. **expanding macros**: the preprocessor replaces the macros with their values.
2. **expanding include directives**: the preprocessor replaces the **#include** directive with the content of the file.
3. **conditional compilation**: the preprocessor evaluates the **#if**, **#ifdef**, **#ifndef**, **#else**, **#elif**, **#endif** directives and includes or excludes the code based on the evaluation.
4. directives such as **#pragma** and **#undef** are also processed by the preprocessor.




create a **main.c** file and write the following :

```c Highlights=1,3,4
#include <stdio.h>

#define print_hello() printf("hello world\n")
#define PI 3.14

#ifndef PI
#define PI 3.1415 // this won't be executed since PI is already defined
#endif


int main() {
    print_hello();
    printf("PI value is %f\n", PI);
    return 0;
}
```

then run the following command to see the output of the preprocessing phase:

```shell
gcc -E main.c -o main.i
```

the first thing you will notice is that the **#include** directive is replaced with the content of the file **stdio.h** and the **#define** directives are replaced with their values and the main function now looks like this:

```c file=main.i
int main() {
    printf("hello world\n");
    printf("PI value is %f\n", 3.14);
    return 0;
}
```
<CoolBear>
you may wonder what is the use of the preprocessing phase, well,
this will help you to understand the code better and see the code that will be compiled. also, it will help you understand and build macros and conditional compilation directives.
</CoolBear>


# Compilation

the compilation phase is the phase where the **preprocessed** file is converted to an **assembly** file. the **compiler** is responsible for this phase.

there is a popular quote by compiler designers :

> "compile the compiler with the compiler. So it doesn't have problems it has"- unknown


the **compiler** is a software component that takes the **preprocessed** file and converts it to an **assembly** file.

to see the output of the compilation phase, run the following command:

```shell
gcc -S main.i -o main.s
```

<CoolBear>
By the way you can set the C standard using -std flag in the compilation command like you did `gcc -S main.i main.s -std=c11` and you can see all c standards in the man page, type `man 7 standards`.
you can also add debugging symbols to the assembly file using the `-ggdb` this will enable you to use the gnu debugger tool to see what's wrong with your code!
</CoolBear>

let's conitnue. This will generate a **main.s** file that contains the assembly code of the **main.i** file.

# Assembly

the assembly phase is the phase where the **assembly** file is converted to an **object** file.

the **assembler** who is responsible for this phase, takes the **assembly** file and converts it to a **Relocatable object file** of type **elf**.



to see the output of the assembly phase, run the following command:

```shell
gcc -c main.s -o main.o
```

this will generate a **main.o** file that contains the object code of the **main.s** file.

this **main.o** file is called a **relocatable** file because it contains the code and data sections of the **main.s** file and it will be merged with other **relocatable** files in the **linking** phase.

cool bear has something to say:

<CoolBear>
### locatable object file

**Relocatable object file** (.o file ) Contains binary code and data in a form that ca nbe combined with other relocatable object files at compile time to create an executable object file. Each .o file is produced from exactly one .c file. Compilers and assemblers generate relocatable object files.
the output of assembling phase is `main.o` file that contains
- this data and code sections' file will be merged with other data and code of other files in the linking phase
- it contains a symbol table
- name only of library functions using in source file.
by the way run this to see for yourself `file main.o`
you will get the following output:
 `main.o: ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped`
file is a command that displays the type of a file.


</CoolBear>



# Linking

this part is the boss of the compilation process, it's the phase where all the **relocatable** files are merged together to create an **executable** file.



<CoolBear props="flex-row-reverse">
**Executable object file** : (a.out file ) Contains binary code and data in a form that can be copied directly into memory and executed. Linkers generate executable object files.
</CoolBear>

<SmartBear props={"flex-row-reverse"}>
idk what to say
</SmartBear>

<CoolBearTip>
here is a tip
</CoolBearTip>

```shell
gcc main.o -o main
```
