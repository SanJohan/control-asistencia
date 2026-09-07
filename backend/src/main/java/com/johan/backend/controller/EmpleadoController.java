package com.johan.backend.controller;

import com.johan.backend.dto.EmpleadoRequest;
import com.johan.backend.dto.EmpleadoResponse;
import com.johan.backend.service.EmpleadoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {

    private final EmpleadoService empleadoService;


    public EmpleadoController(EmpleadoService empleadoService){
        this.empleadoService = empleadoService;
    }

    @GetMapping
    public ResponseEntity<List<EmpleadoResponse>> getAll(){
        return ResponseEntity.ok(empleadoService.getAll());
    }

    @PostMapping
    public ResponseEntity<EmpleadoResponse> create(@Valid @RequestBody EmpleadoRequest empleadoRequest){
        return ResponseEntity.status(HttpStatus.CREATED).body(empleadoService.create(empleadoRequest));
    }

    @PutMapping("/{id}/asistencia")
    public ResponseEntity<EmpleadoResponse> updateStatus(@PathVariable Long id){
        return ResponseEntity.ok(empleadoService.toggle(id));
    }
}
