package com.codeacademyproject.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.codeacademyproject.springboot.exception.ResourceNotFoundException;
import com.codeacademyproject.springboot.model.Fighter;
import com.codeacademyproject.springboot.repository.FighterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class FighterController {

    @Autowired
    private FighterRepository fighterRepository;

    // get all fighters
    @GetMapping("/fighters")
    public List<Fighter> getAllFighters(){
        return fighterRepository.findAll();
    }

    // create fighter rest api
    @PostMapping("/fighters")
    public Fighter createFighter(@RequestBody Fighter fighter) {
        return fighterRepository.save(fighter);
    }

    // get fighter by id rest api
    @GetMapping("/fighters/{id}")
    public ResponseEntity<Fighter> getFighterById(@PathVariable Long id) {
        Fighter fighter = fighterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fighter not exist with id :" + id));
        return ResponseEntity.ok(fighter);
    }

    // update fighter rest api

    @PutMapping("/fighters/{id}")
    public ResponseEntity<Fighter> updateFighter(@PathVariable Long id, @RequestBody Fighter fighterDetails){
        Fighter fighter = fighterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fighter not exist with id :" + id));

        fighter.setFullName(fighterDetails.getFullName());
        fighter.setPosition(fighterDetails.getPosition());
        fighter.setWeight(fighterDetails.getWeight());

        Fighter updatedFighter = fighterRepository.save(fighter);
        return ResponseEntity.ok(updatedFighter);
    }

    // delete fighter rest api
    @DeleteMapping("/fighters/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteFighter(@PathVariable Long id){
        Fighter fighter = fighterRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fighter not exist with id :" + id));

        fighterRepository.delete(fighter);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
