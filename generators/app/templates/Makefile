SRC := src
OBJ := obj
SOURCES := $(wildcard $(SRC)/*.cc)
OBJECTS := $(patsubst $(SRC)/%.cc, $(OBJ)/%.o, $(SOURCES))
CC := clang++


.PHONY: all

all: $(OBJECTS)

$(OBJ)/%.o: $(SRC)/%.cc
    $(CC) -g -fsanitize=address,undefined,fuzzer $< -o $@
