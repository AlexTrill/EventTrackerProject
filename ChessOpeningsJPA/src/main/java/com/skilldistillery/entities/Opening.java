package com.skilldistillery.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Opening {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String name;
	
	@Column(name = "piece_color")
	String pieceColor;
	
	@Column(name = "tutorial_link")
	String tutorialLink;
	
	String type;
	
	@Column(name = "image_url")
	String imageUrl;
	
	public Opening() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPieceColor() {
		return pieceColor;
	}

	public void setPieceColor(String pieceColor) {
		this.pieceColor = pieceColor;
	}

	public String getTutorialLink() {
		return tutorialLink;
	}

	public void setTutorialLink(String tutorialLink) {
		this.tutorialLink = tutorialLink;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "Opening [id=" + id + ", name=" + name + ", pieceColor=" + pieceColor + ", tutorialLink=" + tutorialLink
				+ ", type=" + type + ", imageUrl=" + imageUrl + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, imageUrl, name, pieceColor, tutorialLink, type);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Opening other = (Opening) obj;
		return id == other.id && Objects.equals(imageUrl, other.imageUrl) && Objects.equals(name, other.name)
				&& Objects.equals(pieceColor, other.pieceColor) && Objects.equals(tutorialLink, other.tutorialLink)
				&& Objects.equals(type, other.type);
	}

}
