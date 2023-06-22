class Node :
  def __init__(self, value=0,next=None):
    self.value = value
    self.next = next

class LinkedList(object):
  def __init__(self):
    self.head = None
    self.tail = None
  def append(self,value):
    new_node = Node(value)
    if self.head is None:
      self.head = new_node
      self.tail = new_node
    else:
      self.tail.next = new_node
      self.tail = self.tail.next
  def get(self,idx):
    current = self.head
    for _ in range(idx):
      current = current.next
    return current.value
  def insert(self,idx,value):
    current = self.head
    new_node = Node(value)
    for _ in range(idx -1):
      current = current.next
    # 다음 주소 저장 
    new_node.next = current.next
    # 이전 주소 변경
    current.next = new_node
  def remove(self,idx):
    current = self.head
    for _ in range(idx -1):
      current = current.next
    current.next = current.next.next

# ll = LinkedList()
# ll.append(1)
# ll.append(2)
# ll.append(3)
# ll.append(4)
# ll.append(5)
# ll.remove(3)
# print(ll.get(3))

class ListNode(object):
  def __init__(self,val=0,next=None,prev=None):
    self.val = val
    self.next = next
    self.prev = prev
class BrowserHistory(object):
  def __init__(self,homepage):
    self.head = self.current = ListNode(val=homepage)
  def visit(self,url):
    self.current.next = ListNode(val=url,prev=self.current)
    self.current = self.current.next
    return None
  def back(self,steps):
    while steps > 0 and self.current.prev != None:
      steps -= 1
      self.current = self.current.prev
    return self.current.val
  def forward(self,steps):
    while steps > 0 and self.current.prev != None:
      steps -= 1
      self.current = self.current.next
    return self.current.val
  
# browserHistory = BrowserHistory("leetcode.com");
# browserHistory.visit("google.com");  
# browserHistory.visit("facebook.com");     
# browserHistory.visit("youtube.com");      
# browserHistory.back(1);                   
# browserHistory.back(1);                   
# browserHistory.forward(1);                
# browserHistory.visit("linkedin.com");     
# browserHistory.forward(2);                
# browserHistory.back(2);                   
# browserHistory.back(7);                   