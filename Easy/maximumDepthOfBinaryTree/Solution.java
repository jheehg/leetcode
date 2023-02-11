package maximumDepthOfBinaryTree;

import javax.swing.tree.TreeNode;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    int result = 1;
    
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;
        
        getNode(root, result);
    
        return result;
    }
    
    public void getNode(TreeNode node, int depth){
        if(node != null){
            this.result = (this.result<=depth)? depth : this.result;
           
            depth++;
            getNode(node.left, depth);
            getNode(node.right, depth);
        }
    }
    
    /*
     * 또는 int를 리턴하는 maxDepth() 자체를 다시 호출하는 방법도 있음.
     * 
     * * 재귀 호출 
     * return n + recursion(n);
     * 더이상 자기 자신을 호출하지 않을때까지 반복하여 
     * 최종적으로 리턴되는 값을 기준으로 다시 호출된 값을 따라 위로 올라가며 
     * 값을 도출하게 된다.
     * 
     * */
}