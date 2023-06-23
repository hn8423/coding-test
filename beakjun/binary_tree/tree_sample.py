from collections import deque

class Node:
  def __init__(self, value=0,left=None,right=None):
    self.value = value
    self.left = left
    self.right = right

class BinaryTree:
  def __init__(self):
    self.root = None
    
bt = BinaryTree()
bt.root = Node(value=1)
bt.root.left = Node(value=2)
bt.root.right = Node(value=3)
bt.root.left.left = Node(value=4)
bt.root.left.right = Node(value=5)
bt.root.right.right = Node(value=6)




# level order 넓이 탐색

def maxDepth(root):
  max_depth = 0
  if root is None:
    return max_depth
  q = deque()
  q.append((root,1))
  while q:
    cur_node, cur_depth = q.popleft()
    max_depth = max(max_depth,cur_depth)
    if cur_node.left:
      q.append((cur_node.left, cur_depth+1))
    if cur_node.right:
      q.append((cur_node.right, cur_depth+1))
  
  return max_depth


# postorder(후위순회)

def maxDepth(root):
  max_depth =0
  
  if root is None:
    return max_depth
  
  left_depth = max_depth(root.left)
  right_depth = max_depth(root.right)
  max_depth = max(left_depth,right_depth) + 1
  return max_depth

maxDepth(bt)