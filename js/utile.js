/**
 * Created by hasee on 2017/7/23.
 */
/*
 *  children:获取指定容器下的所有元素子节点（children这个属性的兼容处理，JQ中的children方法也是这样实现的）。
 *  @parameters:
 *      curEle:[object]想要获取哪一个容器下的子元素，就把谁传递进来
 *  @return：
 *      [Array]:存放的是当前容器下的所有元素子节点
 *  by fxf111 on 2017-07-23
 */
function children(curEle) {
    var childNodesList=[], ary=[];
    childNodesList=curEle.childNodes;
    for (var i = 0; i < childNodesList.length; i++) {
        childNodesList[i].nodeType===1?ary.push(childNodesList[i]):null;
    }
    return ary;
}
//------------------------------此处为华丽丽的分割线------------------------------

/*
 *  previousSibling:获取指定容器的上一个哥哥元素
 *  @parameters:
 *      curEle:[object]想要获取哪一个容器上一个哥哥元素，就把谁传递进来
 *  @return:
 *      [object / null]：存放的是当前容器上一个哥哥元素
 *  by fxf111 on 2017-07-23
 */
function prev(curEle) {
    var previousEle;
    previousEle=curEle.previousSibling;
    while(previousEle && previousEle.nodeType!==1){
        previousEle=previousEle.previousSibling;
    }
    return previousEle;
}
/*  prevAll：获取指定容器上的所有哥哥元素
 *  @parameters:
 *      curEle:[object]想要获取哪一个容器上所有哥哥元素，就把谁传递进来
 *  @return:
 *      [array]:存放的是当前容器所有哥哥元素
 *  by fxf111 on 2017-07-23
 */

function prevAll(curEle) {
    var previousEle;
    var ary=[];
    previousEle=curEle.previousSibling;
    while(previousEle){
        if(previousEle.nodeType===1){
            ary.unshift(previousEle);
        }
        previousEle=previousEle.previousSibling;
    }
    return ary;
}

//------------------------------此处为华丽丽的分割线------------------------------

/*
 *  next:获取指定容器的下一个弟弟元素
 *  @parameters:
 *      curEle:[object]想要获取哪一个容器下一个弟弟元素，就把谁传递进来
 *  @return:
 *      [object / null]：存放的是当前容器下一个弟弟元素
 *  by fxf111 on 2017-07-23
 */
function next(curEle) {
    var nextEle;
    nextEle=curEle.nextSibling;
    while(nextEle && nextEle.nodeType!==1){
        nextEle=nextEle.nextSibling;
    }
    return nextEle;
}

//------------------------------此处为华丽丽的分割线------------------------------

/*  nextAll：获取指定容器上的所有弟弟元素
 *  @parameters:
 *      curEle:[object]想要获取哪一个容器上所有弟弟元素，就把谁传递进来
 *  @return:
 *      [array]:存放的是当前容器所有弟弟元素
 *  by fxf111 on 2017-07-23
 */
function nextAll(curEle) {
    var nextEle;
    var ary=[];
    nextEle=curEle.nextSibling;
    while(nextEle){
        if(nextEle.nodeType===1){
            ary.push(nextEle);
        }
        nextEle=nextEle.nextSibling;
    }
    return ary;
}

//------------------------------此处为华丽丽的分割线------------------------------
/*  siblings：获取指定容器上的所有哥哥弟弟元素
 *  @parameters:
 *      curEle:[object]想要获取哪一个容器上所有哥哥弟弟元素，就把谁传递进来
*  @return:
*      [array]:存放的是当前容器所有弟弟元素
*  by fxf111 on 2017-07-23
*/
function siblings(curEle) {
    var parentEle;
    var siblings;
    var finalSiblings=[];
    parentEle=curEle.parentNode;
    siblings=parentEle.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        if(siblings[i]!==curEle && (siblings[i].nodeType===1)){
           finalSiblings.push(siblings[i]);
        }
    }
    return finalSiblings;
}

//prevAll   next   nextAll  siblings 所有哥哥和弟弟