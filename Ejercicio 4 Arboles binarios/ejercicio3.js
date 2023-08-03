class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function printNodesAtLevel(root, level) {
    if (root === null) {
      return;
    }
  
    if (level === 1) {
      console.log(root.data);
    } else if (level > 1) {
      printNodesAtLevel(root.left, level - 1);
      printNodesAtLevel(root.right, level - 1);
    }
  }
  
  // Crear árbol
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.left = new TreeNode(4);
  tree.left.right = new TreeNode(5);
  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(7);
  
  const levelToPrint = 2;
  
  console.log(`Nodos en el nivel ${levelToPrint}:`);
  printNodesAtLevel(tree, levelToPrint);
  