package com.projetofinal.pana.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Ong {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String logourl;
	private String sobre;
	private String fburl;
	private String instaurl;
	private String mapaurl;
	
	public Ong() {
		
	}

	public Ong(Long id, String logourl, String sobre, String fburl, String instaurl, String mapaurl) {
		this.id = id;
		this.logourl = logourl;
		this.sobre = sobre;
		this.fburl = fburl;
		this.instaurl = instaurl;
		this.mapaurl = mapaurl;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLogourl() {
		return logourl;
	}

	public void setLogourl(String logourl) {
		this.logourl = logourl;
	}

	public String getSobre() {
		return sobre;
	}

	public void setSobre(String sobre) {
		this.sobre = sobre;
	}

	public String getFburl() {
		return fburl;
	}

	public void setFburl(String fburl) {
		this.fburl = fburl;
	}

	public String getInstaurl() {
		return instaurl;
	}

	public void setInstaurl(String instaurl) {
		this.instaurl = instaurl;
	}

	public String getMapaurl() {
		return mapaurl;
	}

	public void setMapaurl(String mapaurl) {
		this.mapaurl = mapaurl;
	}

}

