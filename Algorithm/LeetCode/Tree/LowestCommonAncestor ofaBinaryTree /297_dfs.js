var serialize = function(root) {
    let str = ''
    
    let dfs = function(root){
        str+=','
        if(!root) {
            str+="#"
            return 
        }
        str+=root.val
        
        dfs(root.left)
        dfs(root.right)

    }

    dfs(root)

    str = str.slice(1)
    return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let dataList = data.split(',')
    let index = 0;

    let helper = function(){
        if(dataList[index] === '#'){
            index+=1
            return null
        }
        
        let root = new TreeNode(dataList[index])
        index +=1

        root.left = helper()
        root.right = helper()

        return root
    }

    return helper()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */