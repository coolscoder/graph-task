import cytoscape, {
  EdgeSingular,
  NodeSingular,
  SearchVisitFunction,
  Core,
} from 'cytoscape'
import { Node } from '../tree/tree.interface'
import { GraphData, IEdge, IGraph, IVertex, Visit } from './graph.interface'

/**
 * (1) Implement IGraph interface
 */
export class Graph {
  constructor(tree: Node) {
    /**
     * (2) Use Parser interface to parse Node
     */
    /**
     * (3) Initialize cy with parsed data
     */
  }
  /**
   * (4) Use cytoscape under the hood
   */
  bfs() {}
  /**
   * (5) Use cytoscape under the hood
   */
  dfs() {}
}
