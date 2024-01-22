function findDistance(graph, vertexA, vertexB) {
  debugger;
  let toVisit = [[vertexA, 0]];
  const visited = new Set();

  while (toVisit.length > 0) {
    const [current, distance] = toVisit.shift();

    if (current === vertexB && distance > 0) {
      return distance;
    }

    if (!visited.has(current)) {
      visited.add(current);
      for (let vertex of graph[current]) {
        toVisit.push([vertex, distance + 1]);
      }
    }
  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl", "jan"],
    jambaby: [],
    carl: ["jambaby"],
    dave: [],
  };

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));

  console.log("");

  console.log("Expecting: 3");
  console.log(findDistance(graph, "jan", "jan"));

  console.log("");

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "jambaby"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
