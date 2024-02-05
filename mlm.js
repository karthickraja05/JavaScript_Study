class TreeNode {
      constructor(id,amount,name) {
            
            this.amount = amount;
            this.name = name;
            
            
            this.id = id;
            this.left = null;
            this.right = null;
      }
}


class BinaryTree {
      constructor() {
          this.root = null;
          this.totalIncome = 0;
      }
  
      insertById(user,by) {
            if(by === null){
                  this.root = user;
                  return {
                        'status' : true,
                        'message' : 'Assigned as Root Node'
                  };
            }

            if(this.root === null){
                  return {
                        'status' : false,
                        'message' : "Can't add node, base not not found"
                  };
            }

            var queue = [this.root];
            
            while(queue.length > 0){
                  var current = queue.shift();

                  if(current.id === by){
                        return this.append(current,user);
                  }else{
                        queue.push(current.left);
                        queue.push(current.right);
                  }
            }


            return {
                  'status' : false,
                  'message' : 'Parent User Not Found'
            };

      }

      append(current,user){
            if(current.left === null){
                  current.left = user;
                  return {
                        'status' : true,
                        'message' : 'Assigned as Success in right side'
                  };
            }          

            if(current.right === null){
                  current.right = user;
                  return {
                        'status' : true,
                        'message' : 'Assigned as Success in right side'
                  };
            }          
            return {
                  'status' : false,
                  'message' : 'Both side already user assigned'
            };
      }
      
      calcBusiness(){
            var queue = [this.root];
            
            while(queue.length > 0){
                  var current = queue.shift();

                  this.totalIncome += current.amount;
                  
                  if(current.left) queue.push(current.left);
                  if(current.right) queue.push(current.right);

            }
      }

      
}

var binaryTree = new BinaryTree();

var users = [
      {
            id: 1,
            amount: 1500,
            name: 'Karthick',
            by: null,
      },
      {
            id: 2,
            amount: 1500,
            name: 'Sanjith',
            by: 1,
      },
      {
            id: 3,
            amount: 1500,
            name: 'Samuel',
            by: 1,
      },
      {
            id: 4,
            amount: 1500,
            name: 'Gokul',
            by: 2,
      },
      {
            id: 5,
            amount: 1500,
            name: 'Deiva',
            by: 4,
      },
      {
            id: 6,
            amount: 1500,
            name: 'Pravin',
            by: 3,
      },
]

for(let i in users){
      const user  = users[i];
      const person = new TreeNode(user.id,user.amount,user.name);
      var res = binaryTree.insertById(person,user['by']);
      // console.log(person);
      // break;
}

binaryTree.calcBusiness();

console.log(binaryTree);



