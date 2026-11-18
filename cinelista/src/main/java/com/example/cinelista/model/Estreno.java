
package com.example.cinelista.model;

/**
 * Representa un próximo estreno de la sección "Estrenos".
 * Contiene los datos que se muestran en el componente React TarjetaEstreno:
 * identificador, título, fecha de estreno, género y plataforma.
 */
public class Estreno {

    private Long id;
    private String titulo;
    private String fechaEstreno;
    private String genero;
    private String plataforma;

    public Estreno() {
    }

    public Estreno(Long id, String titulo, String fechaEstreno, String genero, String plataforma) {
        this.id = id;
        this.titulo = titulo;
        this.fechaEstreno = fechaEstreno;
        this.genero = genero;
        this.plataforma = plataforma;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getFechaEstreno() {
        return fechaEstreno;
    }

    public void setFechaEstreno(String fechaEstreno) {
        this.fechaEstreno = fechaEstreno;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }
}
