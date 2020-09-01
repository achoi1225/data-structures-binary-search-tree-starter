class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const treeNode = new TreeNode(val);
        if (!this.root) {
            this.root = treeNode;
            return;
        }

        let currTreeNode = this.root;
        while (currTreeNode) {
            if (val < currTreeNode.val) {
                if (!currTreeNode.left) {
                    currTreeNode.left = treeNode;
                    return;
                }
                currTreeNode = currTreeNode.left;
            } else {
                if (!currTreeNode.right) {
                    currTreeNode.right = treeNode;
                    return;
                }
                currTreeNode = currTreeNode.right;
            }
        }
    }

    searchRecur(val, treeNode = this.root) {
        if (!treeNode) {
            return false;
        }

        if (val === treeNode.val) {
            return true;
        }

        if (val < treeNode.val) {
            return this.searchRecur(val, treeNode.left);
        } else if (val > treeNode.val) {
            return this.searchRecur(val, treeNode.right);
        }
    }

    searchIter(val) {
        if (!this.root) {
            return false;
        }

        let currTreeNode = this.root;
        while (currTreeNode) {
            if (currTreeNode.val === val) {
                return true;
            }
            if (val < currTreeNode.val) {
                currTreeNode = currTreeNode.left;
            } else {
                currTreeNode = currTreeNode.right;
            }
        }

        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};