package com.johan.backend.dto;

import jakarta.validation.constraints.NotBlank;

public record EmpleadoRequest(

        @NotBlank
        String nombreCompleto,

        @NotBlank
        String puesto
) {

}
