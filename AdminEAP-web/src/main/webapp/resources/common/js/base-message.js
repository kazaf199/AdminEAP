function fnRenderMessageType(value, type, rowObj, oSetting) {
    if (!value)
        return;
    var ret = value.indexOf("0") > -1 ? "&nbsp;<i class='fa fa-tv text-danger'></i>&nbsp;" : "";
    ret += value.indexOf("1") > -1 ? "&nbsp;<i class='fa fa-envelope-o text-info'></i>&nbsp;" : "";
    ret += value.indexOf("2") > -1 ? "&nbsp;<i class='fa fa-mobile txt-success fa-lg'></i>&nbsp;" : "";
    return ret;
}

function fnRenderMessageStatus(value, type, rowObj) {
    if (value == 0) {
        return '<span class="label label-warning">草稿</span>'
    } else if (value == 4) {
        return '<span class="label label-success">已发送</span>';
    }
    return value;
}

function fnRenderMessageFlag(value, type) {
    if (value == 1) //重要消息
        return '<i class="fa fa-star-o text-yellow"></i>';
    else
        return '<i class="fa fa-star text-yellow"></i>';

}

//渲染是否有附件图标
function fnRenderFileIds(value) {
    if (value)
        return "<i class='fa fa-paperclip'></i>";
    return "";
}

//是否已读
function fnRenderSubject(value,type,rowObj) {
    if(rowObj.readYet==1){
        return value;
    }else{
        return value.replace("<a","<a class='text-bold'");
    }
}
