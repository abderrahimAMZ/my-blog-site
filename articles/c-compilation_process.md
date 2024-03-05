---
title: "C Compilation Process Explained"
date: "2024-02-16"
slug: "c-compilation-process"
type: "blog"
author: "abderrahim amzaourou"
author_github: "https://github.com/abderrahimAMZ"
time : "10 min"
description: "C compilation process explained in details"
---


# Introduction

Ever wondered How C code compiles and runs 🤔 ?

In this blog, we will take a look at the C compilation process details. We will start by explaining the different steps of the compilation process, then we will explain the different types of errors that can occur during the compilation process, and finally, we will explain the different types of files that are generated during the compilation process.


!["picture explaining the c compilation process"](../images/c-compilation-process/c-compilation-process-global.png)

as you see in the picture above, the C compilation process is divided into 5 main steps:

1. Preprocessing
2. Compilation
3. Assembly
4. Linking
5. Execution

which we will explain in details in the following sections.

## Prerequisites

Before you start, make sure you have the following:

- Basic understanding of Linux commands and the Linux operating system.
- Basic understanding of the C programming language and the compilation process.
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

```c file=main.c highlights=1,3,4
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

```bash
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

# Compilation

the compilation phase is the phase where the **preprocessed** file is converted to an **assembly** file. the **compiler** is responsible for this phase.

the **compiler** is a software component that takes the **preprocessed** file and converts it to an **assembly** file.

to see the output of the compilation phase, run the following command:

```bash
gcc -S main.i -o main.s
```

this will generate a **main.s** file that contains the assembly code of the **main.i** file.


# Assembly

the assembly phase is the phase where the **assembly** file is converted to an **object** file. the **assembler** is responsible for this phase.

the **assembler** is a software component that takes the **assembly** file and converts it to an **object** file.


to see the output of the assembly phase, run the following command:

```bash
gcc -c main.s -o main.o
```

this will generate a **main.o** file that contains the object code of the **main.s** file.

this **main.o** file is called a **relocatable** file because it contains the code and data sections of the **main.s** file and it will be merged with other **relocatable** files in the **linking** phase.


# Linking

linking needs a blog on its own, but in this blog, we will give a brief explanation of the **linking** phase.



```bash


```bash

run the following 



```bash
gcc --version

```

```bash
// linux kernel version

uname -a

```

### header files location

```bash
ls /usr/include

```

### specify c standard

```bash

gcc -S hello.i -std=c11

```

### see standards

```bash
man 7 standards

```


## add debugging symbols

```bash

gcc -C -ggdb hello.s

```

## locatable object file

the output of assembling phase is `program.o` file that contains
- this data and code sections' file will be merged with other data and code of other files in the linking phase
- it contains a symbol table
- name only of library functions using in source file.


## static library

```bash

ar -t libc.a | grep printf.o
-> outputs all object files has printf.o name.

```

### static vs dynamic linking

```bash
gcc hello.c -o dynamicexe -lc
gcc hello.c -o staticexe -lc --static
// their sizes
ls -lh dyynaicexe staticexe


```


### types of object files


![[Pasted image 20240101131523.png]]
![[Pasted image 20240101131551.png]]
![[Pasted image 20240101131609.png]]
![[Pasted image 20240101131630.png]]
![[Pasted image 20240101131836.png]]

```bash
readelf -h hello.o	
readelf -S hello.o // names of sections
```

.text : code
.data : initialized variables + static variables
.bss : beter save space ( unintialized variables)

### objdump


```bash
objdump -h hello.o 
objdump -D hello.o // disassembly of all sections
objdump -d hello.o // disassembly of main only
objdump -d -M intel hello.o // intel format
```


## debugging

```bash
gdb -q dynamicexe // run debugging session
disassemble main // disassemble main
set disassembly-flavor intel
disassemble main // run it again
break main // breakpoint
run
info registers // or info all-registers

gdb c
q // quit


```
![[Pasted image 20240101132926.png]]
![[Pasted image 20240101141416.png]]

```bash
echo $? // what main return
```

## syscalls numbers


```bash
less /usr/include/toolchainhere(x86_64-linux-gnu)/asm/unistd_64.h
```

## move from assembly to relocatable file

```bash
nasm -f elf64 syscall.nasm // > syscall.o
```

# Linker and libraries
![[Pasted image 20240101142830.png]]

![[Pasted image 20240101142905.png]]

![[Pasted image 20240101143018.png]]
![[Pasted image 20240101143100.png]]
![[Pasted image 20240101143146.png]]


## symbol resolution

![[Pasted image 20240101143745.png]]

## symbol table

```bash
readelf -s main.o
objdump -t main.o
nm main.o
```
![[Pasted image 20240101153929.png]]
![[Pasted image 20240101153911.png]]
![[Pasted image 20240101154549.png]]
![[Pasted image 20240101154601.png]]

## AR UTILITY

```bash
ar -x libc.a # get all the functions within static libc
```

```bash
gcc -c prog1.c -I ../ # look at header file one step up.
```

linking to custom library

```bash
gcc files.o -o outputfile -llibrary -Lpath
# example
gcc *.o -o myexe -labderrahimmath -L../
```



## shared library .so

```bash
gcc -c -fPIC *.c
gcc -shared *.o -o libabderrahimmath.so
```


## list dynamic dependencies
```bash
ldd myexe
```


## warning! : shared library need to be loaded to standard location or update environment variable to include your shared library

```bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:PATH_TO_YOUR_SHARED_LIBRARY
```





# preprocessin