#include <emscripten/emscripten.h>
#include <stdio.h>

EMSCRIPTEN_KEEPALIVE
float add(float x, float y) {
    return x+y;
}



int main() {
    float suma =  add(2.0f, 3.0f);
    printf("resulatdo suma: %f \n", suma);
}

