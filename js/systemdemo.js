
function openOfficeFileFromSystemDemo(param){
    let jsonObj = (typeof(param)=='string' ? JSON.parse(param) : param)
    alert("从业务系统传过来的参数为：" + JSON.stringify(jsonObj))
    return {wps加载项项返回: jsonObj.filepath + ", 这个地址给的不正确"}
}

function InvokeFromSystemDemo(param){
    let jsonObj = (typeof(param)=='string' ? JSON.parse(param) : param)
    let handleInfo = jsonObj.Index
    switch (handleInfo){
        case "getDocumentName":{
            let docName = ""
            if (window.Application.ActiveDocument){
                docName = window.Application.ActiveDocument.Name
            }

            return {当前打开的文件名为:docName}
        }

        case "newDocument":{
            let newDocName=""
            let doc = window.Application.Documents.Add()
            newDocName = doc.Name

            return {操作结果:"新建文档成功，文档名为：" + newDocName}
        }
        
        case "OpenFile":{
            let filePath = jsonObj.filepath
            window.Application.Documents.OpenFromUrl(filePath)
            return {操作结果:"打开文件成功"}
        }
    }

    return {其它xxx:""}
}
