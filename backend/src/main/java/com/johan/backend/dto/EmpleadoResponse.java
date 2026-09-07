package com.johan.backend.dto;

import com.johan.backend.model.EstadoAsistencia;

public record EmpleadoResponse(
        Long id,
        String nombreCompleto,
        String puesto,
        EstadoAsistencia estado
) {
}
