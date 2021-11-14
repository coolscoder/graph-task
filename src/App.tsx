import React from 'react'
import { Graph } from './graph-theory/graph/graph'
import { treeData } from './graph-theory/tree/tree.data'
import { IGraph, IVertex, IEdge } from './graph-theory/graph/graph.interface'

const App = () => {
  const graph: IGraph = new Graph(treeData)
  graph.bfs((v: IVertex, e: IEdge) => {
    console.log("&&&&&&")
  })
  return (
    <div id="App">APP</div>
  )
}

export default App