package com.codeacademyproject.springboot.repository;

import com.codeacademyproject.springboot.model.Fighter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FighterRepository extends JpaRepository<Fighter, Long> {
}
