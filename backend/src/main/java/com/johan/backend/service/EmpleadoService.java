package com.johan.backend.service;

import com.johan.backend.dto.EmpleadoRequest;
import com.johan.backend.dto.EmpleadoResponse;
import com.johan.backend.model.Empleado;
import com.johan.backend.model.EstadoAsistencia;
import com.johan.backend.repository.EmpleadoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoService {

    private final EmpleadoRepository empleadoRepository;

    public EmpleadoService(EmpleadoRepository empleadoRepository){
        this.empleadoRepository = empleadoRepository;
    }


    public List<EmpleadoResponse> getAll(){
        return empleadoRepository.findAll().stream().map(this::toResponse).toList();
    }

    public EmpleadoResponse create(EmpleadoRequest empleadoRequest){
        Empleado empleado = new Empleado();

        empleado.setNombreCompleto(empleadoRequest.nombreCompleto());
        empleado.setPuesto(empleadoRequest.puesto());
        empleado.setEstado(EstadoAsistencia.AUSENTE);

        return toResponse(empleadoRepository.save(empleado));
    }

    public EmpleadoResponse toggle(Long id){
        Empleado empleado = empleadoRepository.findById(id).orElseThrow(
                () -> new RuntimeException("no existe emplado con este id " + id));

        empleado.setEstado(empleado.getEstado().invertStatus());

        return  toResponse(empleadoRepository.save(empleado));
    }



    private EmpleadoResponse toResponse(Empleado empleado){
        return new EmpleadoResponse(
                empleado.getId(),
                empleado.getNombreCompleto(),
                empleado.getPuesto(),
                empleado.getEstado()
        );
    }

}
