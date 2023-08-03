class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function countLeaves(root) {
    if (root === null) {
      return 0;
    }
  
    if (root.left === null && root.right === null) {
      return 1;
    }
  
    return countLeaves(root.left) + countLeaves(root.right);
  }
  
  // Crear árbol
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.left = new TreeNode(4);
  tree.left.right = new TreeNode(5);
  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(7);
  
  const numberOfLeaves = countLeaves(tree);
  console.log("Número de hojas en el árbol:", numberOfLeaves);
  