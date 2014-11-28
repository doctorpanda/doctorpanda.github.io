(function(window, undefined) {
var dictionary = {
"5a045e4e-dcd5-4e56-98a9-9240d0e63b78": "视频",
"9e851191-6634-49b0-bc73-ac9590b6fa51": "病人详情",
"cc5c9bd5-aaf6-489b-8661-cede3e146593": "菜单",
"79b0c0ec-2f5b-4cf7-b653-3cbd7b19f713": "我的病历",
"0883cb9e-6393-4537-adb1-2b04b47f69b3": "接待病人",
"e07f5893-9bd2-45e8-802b-d45d811de481": "设置",
"68503a7d-e959-40d2-95b6-e671729aeb29": "找医生",
"187c81e5-b0f4-4343-baba-527b45e6d755": "历史详细",
"d4296f81-2c61-483c-ab9b-fb85abdef3da": "症状",
"d824b77e-c9fe-4501-aa87-4d0146bfc6d2": "注册",
"38739fc8-095f-4ed4-9cfd-72b53c212664": "过敏",
"5269f4d6-29ab-4edd-9ddd-30effe7f496a": "登录",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
};

var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);