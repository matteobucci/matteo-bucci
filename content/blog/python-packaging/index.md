---
title: "Learning Python by failing it"
date: "2021-08-06"
slug: "python-packaging"
template: "post"
---


I usually say I've got basic python proficiency, meaning that usually I can orientate myself in the source code and understand what's going on. But I've never really written a python package, and I've never really used python in a project that's more than a few files. So, instead of trying to build my own package I've decided to study a project I've been using lately (GarminDb)[https://github.com/tcgoetz/GarminDB] and that I want to contribute to.

## Goals

- Being able to contribute meaningfully to GarminDb
- Understand how to build a python package
- Being able to build a docker image with the package



## First: general look at the project

First, in order to get used with the project it's interesting to follow the build and usage instruction to see how it's working.

What I've discovered so far is that you can either use garmindb as a python package to download or you can run it from the source.
In either case, you need to include a configuration file in your home folder and a folder in your home is going to be created as result of the program execution.

When running from the source, we need to run `make` commands that build the project, install the dependencies and run the scripts we are interested with, the ones that are syncronizing the data from Garmin to a local database.

When running from the package, we are required to write the entire command and its arguments.

I believe the way the CLI is build is standard, with a nice SDK that defines the arguments avaialble and the functions that are going to be called when the arguments are passed.

However, I cannot change the execution of the program, so the python files are not called directly.

## Attempt at changing the source and debug it

I would like to explore the execution of the software by running the files while debugging. The problem, as I mentioned, is that the files are not called directly, but they are called by the `garmindb` package.

There must be a way to run the files directly, and a way to build and install the updated package.
The latter is done with the make command.

```
build: devdeps
	$(PYTHON) -m build

$(PROJECT_BASE)/dist/$(MODULE)-*.whl: build

# install is used to install the project from the wheel file
install: $(PROJECT_BASE)/dist/$(MODULE)-*.whl
	$(PIP) install --upgrade $(PROJECT_BASE)/dist/$(MODULE)-*.whl

reinstall: clean $(PROJECT_BASE)/dist/$(MODULE)-*.whl
	$(PIP) install --upgrade --force-reinstall --no-deps $(PROJECT_BASE)/dist/$(MODULE)-*.whl

install_all: $(SUBMODULES:%=%-install) install

$(SUBMODULES:%=%-uninstall):
	$(MAKE) -C $(subst -uninstall,,$@) uninstall
```

I'm not very confident with a make package, so I will have ChatGPT explaining the code line by line.


```
When you run python -m build from the command line, it invokes the build module, which provides a convenient way to create distribution packages for Python projects. This is commonly used for creating source distributions (tarballs or zip files) and binary distributions (wheels) of Python packages.
```

Interesting!


```$(PROJECT_BASE)/dist/$(MODULE)-*.whl: build``` is the build of the submodules of the project, as being defined on

```
SUBMODULES=Fit Tcx utilities
SUBDIRS=fitbitdb garmindb healthdb mshealthdb
```

in the makefile.


We are dealing with a python project that not only is compiled and build but do the same with the submodules.

```
$(SUBMODULES:%=%-devdeps): This is a target pattern that generates a list of target names by iterating over the elements in the SUBMODULES list and appending "-devdeps" to each element. The $(SUBMODULES:%=%-devdeps) construct uses the % as a placeholder for each element in the SUBMODULES list. This part of the line defines the list of targets that will be generated.

```

Now I'm also learning about make.

This is interesting, but I would like to know where the need of having different packages is coming from.






