package com.codeacademyproject.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "fighters")

public class Fighter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "position")
    private int position;

    @Column(name = "weight")
    private String weight;

    @Column(nullable = true, length = 64)
    private String photo;

    public Fighter() {

    }

    public Fighter(String fullName, String weight, int position) {
        super();
        this.fullName = fullName;
        this.position = position;
        this.weight = weight;
    }
    public long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public int getPosition() {
        return position;
    }
    public void setPosition(int position) {
        this.position = position;
    }
    public String getWeight() {
        return weight;
    }
    public void setWeight(String weight) { this.weight = weight; }
    public String getPhoto() { return photo; }
    public void setPhoto(String photo) { this.photo = photo; }
    @Transient
    public String getPhotosImagePath() {
        if (photo == null || id == null) return null;

        return "/fighter-photos/" + id + "/" + photo;
    }
}
