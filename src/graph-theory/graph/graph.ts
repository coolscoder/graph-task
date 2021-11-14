import cytoscape, {
  EdgeSingular,
  NodeSingular,
  SearchVisitFunction,
  Core,
} from 'cytoscape'
import { Node } from '../tree/tree.interface'
import { Parser } from '../parser/parser';
import { GraphData, IEdge, IGraph, IVertex, Visit } from './graph.interface'

/**
 * (1) Implement IGraph interface
 */
export class Graph implements IGraph<IVertex, IEdge> {
  cy: Core
  constructor(tree: Node) {

    /**
     * (2) Use Parser interface to parse Node
     */

    let bvertices: Array<IVertex> = []
    let dvertices: Array<IVertex> = []
    let bedges: Array<IEdge> = []
    let dedges: Array<IEdge> = []

    function parserD(params: Array<Node>, id: string) {
      if (params.length == 0) return;
      for(let i = params.length - 1 ; i >= 0; i--) {
        dedges.push({ source: id, target: params[i].id })
        dvertices.push({ id: params[i].id, name: params[i].name })
        parserD(params[i].children, params[i].id)
      }
    }

    dvertices.push({ id: tree.id, name: tree.name })
    parserD(tree.children, tree.id)

    bvertices.push({ id: tree.id, name: tree.name })
    let queue: Array<Node> = []
    queue.push(tree)

    while(queue.length > 0) {
      let temp: Node | undefined = queue.shift()
      if (temp) for(let i = 0 ; i < temp.children.length ; i++) {
        queue.push(temp.children[i])
        bvertices.push({ id: temp.children[i].id, name: temp.children[i].name })
      }
    }


    
    /**
     * (3) Initialize cy with parsed data
     */

    this.cy = cytoscape({
      data: {
        bnodes: bvertices,
        dnodes: dvertices,
        bedges: bedges,
        dedges: dedges,
      }
    })
  }
  /**
   * (4) Use cytoscape under the hood
   */
  bfs(visit: Visit<IVertex, IEdge>) {
    this.cy._private.data.bnodes.map(item => {
      visit(item, null)
    })
  }
  /**
   * (5) Use cytoscape under the hood
   */
  dfs(visit: Visit<IVertex, IEdge>) {
    this.cy._private.data.dnodes.map(item => {
      visit(item, null)
    })
  }
}
