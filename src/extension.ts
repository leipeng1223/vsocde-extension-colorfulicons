import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "colorfulIcons.changeIcon",
    (uri: vscode.Uri) => {
	  const filePath = uri.fsPath;
      // 1.获得当前被右键的文件名和父文件夹(已解决)
      // 2.读取file icon theme配置文件
      // 3.向读取的配置中加入新的条目
      // 4.更新配置文件
      console.log(filePath);
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
