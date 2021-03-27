package edu.brown.cs.termproject.collegegraph;

import edu.brown.cs.termproject.graph.Vertex;
import edu.brown.cs.termproject.router.Locatable;

public class College implements Locatable, Vertex {

  private int id;
  private String name;
  private double lat;
  private double lon;

  /**
   * Constructs a college.
   * @param id college id
   * @param name college name
   * @param lat latitude
   * @param lon longitude
   */
  public College(int id, String name, double lat, double lon) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lon = lon;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  @Override
  public double getLat() {
    return lat;
  }

  @Override
  public double getLon() {
    return lon;
  }

  @Override
  public String toString() {
    return name + ": (" + lat + ", " + lon + ")";
  }
}
