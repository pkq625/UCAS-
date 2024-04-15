function goCheck(checkStr){
if (checkStr.trim() === ''){
checkStr = "没有，非常好，很棒，很不错，很好！！！"
}
$("textarea").each(function(index, domEle){
	$(this).val(checkStr)
})
$("input:radio").each(function(idx, domEle){
	if (idx %5 == 0)
		$(this).attr("checked", true);
	idx += 1;
})
}
function createFloatingWindow() {
  var floatingWindow = document.createElement('div');
  floatingWindow.className = 'floating-window';
  floatingWindow.style.position = 'fixed';
  floatingWindow.style.top = '50px';
  floatingWindow.style.left = '50px';
  floatingWindow.style.width = '200px';
  floatingWindow.style.height = '100px';
  floatingWindow.style.backgroundColor = '#f0f0f0';
  floatingWindow.style.border = '1px solid #ccc';
  floatingWindow.style.borderRadius = '5px';
  floatingWindow.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
  floatingWindow.style.zIndex = '9999';

  var closeButton = document.createElement('div');
  closeButton.className = 'close-button';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.color = '#666';
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    floatingWindow.style.display = 'none';  
  };

    var textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.style.height = '150px';
    textarea.style.resize = 'none'; 
    textarea.placeholder = '请输入测评用语(>=15字)不输入则使用默认字符串...';
    // 创建按钮
    var button = document.createElement('button');
    button.textContent = '开始测评';
    button.style.marginTop = '10px'; 
    button.onclick = function() {
        var text = textarea.value; 
        goCheck(text)
      };

    floatingWindow.appendChild(closeButton);
    floatingWindow.appendChild(textarea);
    floatingWindow.appendChild(button);

  document.body.appendChild(floatingWindow);
}
createFloatingWindow();
