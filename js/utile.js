/**
 * Created by hasee on 2017/7/23.
 */
/*
 *  children:��ȡָ�������µ�����Ԫ���ӽڵ㣨children������Եļ��ݴ���JQ�е�children����Ҳ������ʵ�ֵģ���
 *  @parameters:
 *      curEle:[object]��Ҫ��ȡ��һ�������µ���Ԫ�أ��Ͱ�˭���ݽ���
 *  @return��
 *      [Array]:��ŵ��ǵ�ǰ�����µ�����Ԫ���ӽڵ�
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
//------------------------------�˴�Ϊ�������ķָ���------------------------------

/*
 *  previousSibling:��ȡָ����������һ�����Ԫ��
 *  @parameters:
 *      curEle:[object]��Ҫ��ȡ��һ��������һ�����Ԫ�أ��Ͱ�˭���ݽ���
 *  @return:
 *      [object / null]����ŵ��ǵ�ǰ������һ�����Ԫ��
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
/*  prevAll����ȡָ�������ϵ����и��Ԫ��
 *  @parameters:
 *      curEle:[object]��Ҫ��ȡ��һ�����������и��Ԫ�أ��Ͱ�˭���ݽ���
 *  @return:
 *      [array]:��ŵ��ǵ�ǰ�������и��Ԫ��
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

//------------------------------�˴�Ϊ�������ķָ���------------------------------

/*
 *  next:��ȡָ����������һ���ܵ�Ԫ��
 *  @parameters:
 *      curEle:[object]��Ҫ��ȡ��һ��������һ���ܵ�Ԫ�أ��Ͱ�˭���ݽ���
 *  @return:
 *      [object / null]����ŵ��ǵ�ǰ������һ���ܵ�Ԫ��
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

//------------------------------�˴�Ϊ�������ķָ���------------------------------

/*  nextAll����ȡָ�������ϵ����еܵ�Ԫ��
 *  @parameters:
 *      curEle:[object]��Ҫ��ȡ��һ�����������еܵ�Ԫ�أ��Ͱ�˭���ݽ���
 *  @return:
 *      [array]:��ŵ��ǵ�ǰ�������еܵ�Ԫ��
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

//------------------------------�˴�Ϊ�������ķָ���------------------------------
/*  siblings����ȡָ�������ϵ����и��ܵ�Ԫ��
 *  @parameters:
 *      curEle:[object]��Ҫ��ȡ��һ�����������и��ܵ�Ԫ�أ��Ͱ�˭���ݽ���
*  @return:
*      [array]:��ŵ��ǵ�ǰ�������еܵ�Ԫ��
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

//prevAll   next   nextAll  siblings ���и��͵ܵ�