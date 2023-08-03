class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function areIdenticalTrees(rootA, rootB) {
    if (rootA === null && rootB === null) {
      return true;
    }
  
    if (rootA === null || rootB === null) {
      return false;
    }
  
    return (
      rootA.data === rootB.data &&
      areIdenticalTrees(rootA.left, rootB.left) &&
      areIdenticalTrees(rootA.right, rootB.right)
    );
  }
  
  // Crear árbol A
  const treeA = new TreeNode(1);
  treeA.left = new TreeNode(2);
  treeA.right = new TreeNode(3);
  treeA.left.left = new TreeNode(4);
  treeA.left.right = new TreeNode(5);
  
  // Crear árbol B (idéntico a A)
  const treeB = new TreeNode(1);
  treeB.left = new TreeNode(2);
  treeB.right = new TreeNode(3);
  treeB.left.left = new TreeNode(4);
  treeB.left.right = new TreeNode(5);
  
  // Crear árbol C (diferente de A y B)
  const treeC = new TreeNode(1);
  treeC.left = new TreeNode(2);
  treeC.right = new TreeNode(3);
  
  console.log("Árbol A y Árbol B son idénticos:", areIdenticalTrees(treeA, treeB)); // true
  console.log("Árbol A y Árbol C son idénticos:", areIdenticalTrees(treeA, treeC)); // false
  