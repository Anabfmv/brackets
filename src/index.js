module.exports = function check(str, bracketsConfig) {

  let st =  new Stack();
  

  for(let i=0; i<str.length; i++){
    for(let y=0; y<bracketsConfig.length; y++){
      let first_el = bracketsConfig[y][0];
      let sec_el = bracketsConfig[y][1];

      if(first_el==sec_el && str[i]==first_el){
        if(st.peek()==first_el){
          st.pop();
        }
        else{
          st.push(str[i]);
        }
      }
     else if(str[i]==first_el){
        st.push(str[i]);
      }
      else if(str[i]==sec_el){
        if(st.pop() != first_el){
          return false;
        }
      }
    }
  }
  if(st.getSize()==0){
    return true;
  }
  else{
    return false;
  }
}


function Stack() {
  this._size = 0;
  this._storage = {};
}

Stack.prototype.push = function(data) {
  var size = ++this._size;
  this._storage[size] = data;
};

Stack.prototype.getSize = function(data) {
    return this._size;
};

Stack.prototype.pop = function() {
  var size = this._size,
      deletedData;

  if (size) {
      deletedData = this._storage[size];

      delete this._storage[size];
      this._size--;

      return deletedData;
  }
};
Stack.prototype.peek = function() {
  var size = this._size,
      deletedData;

  if (size) {
      deletedData = this._storage[size];
      return deletedData;
  }
};

