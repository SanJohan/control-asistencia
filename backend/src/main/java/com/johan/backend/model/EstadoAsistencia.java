package com.johan.backend.model;

public enum EstadoAsistencia {

    PRESENTE,
    AUSENTE;

    public EstadoAsistencia invertStatus() {
        return this == PRESENTE ? AUSENTE : PRESENTE;
    }
}
