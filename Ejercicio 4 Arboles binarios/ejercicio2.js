class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function copyTree(root) {
    if (root === null) {
      return null;
    }
  
    const newNode = new TreeNode(root.data);
    newNode.left = copyTree(root.left);
    newNode.right = copyTree(root.right);
    
    return newNode;
  }
  
  // Crear árbol original
  const treeA = new TreeNode(1);
  treeA.left = new TreeNode(2);
  treeA.right = new TreeNode(3);
  treeA.left.left = new TreeNode(4);
  treeA.left.right = new TreeNode(5);
  
  // Obtener una copia del árbol
  const treeB = copyTree(treeA);
  
  console.log("Árbol A (original):", treeA);
  console.log("Árbol B (copia):", treeB);
  