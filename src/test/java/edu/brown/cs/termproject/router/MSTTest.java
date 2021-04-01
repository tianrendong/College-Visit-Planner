package edu.brown.cs.termproject.router;

import com.google.maps.errors.ApiException;
import edu.brown.cs.termproject.collegegraph.College;
import edu.brown.cs.termproject.collegegraph.CollegeGraph;
import edu.brown.cs.termproject.collegegraph.Path;
import edu.brown.cs.termproject.graph.Graph;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.assertEquals;

public class MSTTest {

  List<College> _colleges;

  @Before
  public void setUp() {
    College c1 = new College(1, "Massachusetts Institute of Technology", 42.360001, -71.092003);
    College c2 = new College(2, "Stanford University", 37.428230, -122.168861);
    College c3 = new College(3, "Harvard University", 42.374443, -71.116943);
    College c4 = new College(4, "California Institute of Technology", 34.138000, -118.125000);
    _colleges = new ArrayList<>(Arrays.asList(c1, c2, c3, c4));
  }

  @Test
  public void testMST() throws InterruptedException, ApiException, IOException {
    setUp();
    Graph<College, Path> graph = new CollegeGraph(_colleges);
    Comparator<Path> comparator = new Comparator<>() {
      @Override
      public int compare(Path o1, Path o2) {
        return Double.compare(o1.getWeight(), o2.getWeight());
      }
    };
    Set<Path> mstEdges = MST.mst(graph, comparator);
    Graph<College, Path> mst = new CollegeGraph(new ArrayList<>());
    for (Path p : mstEdges) {
      mst.addEdge(p);
      System.out.println(p);
    }
    assertEquals(graph.getVertices(), mst.getVertices());
    assertEquals(3, mst.getEdges().size());
  }
}