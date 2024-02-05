class TreeNode {
    constructor(id, amount, name) {
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

    insertById(user, by) {
        if (by === null) {
            this.root = user;
            return {
                'status': true,
                'message': 'Assigned as Root Node'
            };
        }

        if (this.root === null) {
            return {
                'status': false,
                'message': "Can't add node, base not found"
            };
        }

        var queue = [this.root];

        while (queue.length > 0) {
            var current = queue.shift();

            if (current.id === by) {
                return this.append(current, user);
            } else {
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
                // queue.push(current.left);
                // queue.push(current.right);
            }
        }

        return {
            'status': false,
            'message': 'Parent User Not Found'
        };
    }

    append(current, user) {
        if (current.left === null) {
            current.left = user;
            return {
                'status': true,
                'message': 'Assigned as Success in left side'
            };
        }

        if (current.right === null) {
            current.right = user;
            return {
                'status': true,
                'message': 'Assigned as Success in right side'
            };
        }
        return {
            'status': false,
            'message': 'Both sides already user assigned'
        };
    }

    calcBusiness() {
        var queue = [this.root];

        while (queue.length > 0) {
            var current = queue.shift();

            this.totalIncome += current.amount;

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    drawTree(canvas, node, x, y, level) {
        if (!node) return;
        
        const ctx = canvas.getContext('2d');
        const radius = 40;
        const spacingX = 150;
        const spacingY = 150;
        
        // Draw the node
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#00f';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.fillText(node.name, x, y);
        
        // Draw connections to children
        if (node.left) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - spacingX / level, y + spacingY);
            ctx.stroke();
            this.drawTree(canvas, node.left, x - spacingX / level, y + spacingY, level + 1);
        }
        if (node.right) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + spacingX / level, y + spacingY);
            ctx.stroke();
            this.drawTree(canvas, node.right, x + spacingX / level, y + spacingY, level + 1);
        }
    }
}

const binaryTree = new BinaryTree();

const users = [
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
    {
        id: 7,
        amount: 1500,
        name: 'Adhi',
        by: 6,
    },
    {
        id: 8,
        amount: 1500,
        name: 'Ramya',
        by: 6,
    },
    {
        id: 9,
        amount: 1500,
        name: 'Latha',
        by: 3,
    },
    {
        id: 10,
        amount: 1500,
        name: 'Ranjith',
        by: 9,
    },
    {
        id: 11,
        amount: 1500,
        name: 'Vishnu',
        by: 9,
    },
];

for (const user of users) {
    const person = new TreeNode(user.id, user.amount, user.name);
    binaryTree.insertById(person, user['by']);
}

binaryTree.calcBusiness();

const canvas = document.getElementById('canvas');
binaryTree.drawTree(canvas, binaryTree.root, canvas.width / 2, 50, 1);
