function onbuttonclick(idStr)
{
    if (typeof (window.Application.Enum) != "object") { // 如果没有内置枚举值
        window.Application.Enum = WPS_Enum
    }
    switch(idStr)
    {
        case "dockLeft":{
                let tsId = window.Application.PluginStorage.getItem("taskpane_id")
                if (tsId){
                    let tskpane = window.Application.GetTaskPane(tsId)
                    tskpane.DockPosition = window.Application.Enum.msoCTPDockPositionLeft
                }
                break
            }
        case "dockRight":{
            let tsId = window.Application.PluginStorage.getItem("taskpane_id")
                if (tsId){
                    let tskpane = window.Application.GetTaskPane(tsId)
                    tskpane.DockPosition = window.Application.Enum.msoCTPDockPositionRight
                }
                break
        }
        case "hideTaskPane":{
            let tsId = window.Application.PluginStorage.getItem("taskpane_id")
                if (tsId){
                    let tskpane = window.Application.GetTaskPane(tsId)
                    tskpane.Visible = false
                }
                break
        }
        case "addString":{
            let doc = window.Application.ActiveDocument
            if (doc){
                doc.Range(0, 0).Text="Hello, wps加载项!"
                //好像是wps的bug, 这两句话触发wps重绘
                let rgSel = window.Application.Selection.Range
                if (rgSel)
                    rgSel.Select()
            }
            break;
        }
        case "getDocName":{
            let doc = window.Application.ActiveDocument
                let textValue = "";
                if (!doc){
                    textValue = textValue + "当前没有打开任何文档"
                    return
                }
                textValue = textValue + doc.Name
                document.getElementById("text_p").innerHTML = textValue
                break
        }
    }
}

window.onload = function () {
    var xmlReq = WpsInvoke.CreateXHR();
    var url = location.origin + "/.debugTemp/NotifyDemoUrl"
    xmlReq.open("GET", url);
    xmlReq.onload = function (res) {
        var node = document.getElementById("DemoSpan");
        node.innerText = res.target.responseText;
    };
    xmlReq.send();
}