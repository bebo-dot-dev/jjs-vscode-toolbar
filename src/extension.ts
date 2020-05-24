import * as vscode from 'vscode';

/**
 * called on extension start
 *
 * @export
 * @param {vscode.ExtensionContext} context
 */
export function activate(context: vscode.ExtensionContext) {

    registerFileCommands(context);

    registerEditorCommands(context);

    registerExternalExtensionCommands(context);                                    
}

/**
 * registers file related commands
 *
 * @param {vscode.ExtensionContext} context
 */
function registerFileCommands(context: vscode.ExtensionContext) {
    let newFileCmd = vscode.commands.registerCommand('jjstoolbar.newFile', () => {
        vscode.commands.executeCommand('workbench.action.files.newUntitledFile');
    });
    context.subscriptions.push(newFileCmd);

    let newFolderCmd = vscode.commands.registerCommand('jjstoolbar.newFolder', () => {
        vscode.commands.executeCommand('explorer.newFolder');
    });
    context.subscriptions.push(newFolderCmd);
            
    let saveCmd = vscode.commands.registerCommand('jjstoolbar.save', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        else {
            editor.document.save();
        }
    });
    context.subscriptions.push(saveCmd);

    let saveAsCmd = vscode.commands.registerCommand('jjstoolbar.saveAs', () => {
        vscode.commands.executeCommand('workbench.action.files.saveAs');
    });
    context.subscriptions.push(saveAsCmd);

    let saveAllCmd = vscode.commands.registerCommand('jjstoolbar.saveAll', () => {
        vscode.commands.executeCommand('workbench.action.files.saveAll');
    });
    context.subscriptions.push(saveAllCmd);

    let closeCmd = vscode.commands.registerCommand('jjstoolbar.close', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        else {
            vscode.commands.executeCommand('workbench.action.closeActiveEditor');
        }
    });
    context.subscriptions.push(closeCmd);

    let closeAllCmd = vscode.commands.registerCommand('jjstoolbar.closeAll', () => {
        vscode.commands.executeCommand('workbench.action.closeAllEditors');
    });
    context.subscriptions.push(closeAllCmd);

    let openFileCmd = vscode.commands.registerCommand('jjstoolbar.openFile', () => {
        vscode.commands.executeCommand('workbench.action.files.openFile');
    });
    context.subscriptions.push(openFileCmd);

    let openRecentCmd = vscode.commands.registerCommand('jjstoolbar.openRecent', () => {
        vscode.commands.executeCommand('workbench.action.quickOpenRecent');
    });
    context.subscriptions.push(openRecentCmd);

    let openFolderCmd = vscode.commands.registerCommand('jjstoolbar.openFolder', () => {
        vscode.commands.executeCommand('workbench.action.files.openFolder');
    });
    context.subscriptions.push(openFolderCmd);

    let closeFolderCmd = vscode.commands.registerCommand('jjstoolbar.closeFolder', () => {
        vscode.commands.executeCommand('workbench.action.closeFolder');
    });
    context.subscriptions.push(closeFolderCmd);
}

/**
 * registers editor related commands
 *
 * @param {vscode.ExtensionContext} context
 */
function registerEditorCommands(context: vscode.ExtensionContext) {

    let undoCmd = vscode.commands.registerCommand('jjstoolbar.undo', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        else {
            vscode.commands.executeCommand('undo');
        }
    });
    context.subscriptions.push(undoCmd);

    let redoCmd = vscode.commands.registerCommand('jjstoolbar.redo', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        else {
            vscode.commands.executeCommand('redo');
        }
    });
    context.subscriptions.push(redoCmd);

    let trimWhiteSpaceCmd = vscode.commands.registerCommand('jjstoolbar.trimWhitespace', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        else {
            vscode.commands.executeCommand('editor.action.selectAll');
            vscode.commands.executeCommand('editor.action.trimTrailingWhitespace');
            vscode.commands.executeCommand('workbench.action.navigateBack');
            vscode.commands.executeCommand('workbench.action.navigateForward');
        }
    });
    context.subscriptions.push(trimWhiteSpaceCmd);

    let toggleWordWrapCmd = vscode.commands.registerCommand('jjstoolbar.wordwrap', () => {
        vscode.commands.executeCommand('editor.action.toggleWordWrap');
    });
    context.subscriptions.push(toggleWordWrapCmd);

    let commentLineCmd = vscode.commands.registerCommand('jjstoolbar.lineComment', () => {
        vscode.commands.executeCommand('editor.action.commentLine');
    });
    context.subscriptions.push(commentLineCmd);

    let blockCommentCmd = vscode.commands.registerCommand('jjstoolbar.blockComment', () => {
        vscode.commands.executeCommand('editor.action.blockComment');
    });
    context.subscriptions.push(blockCommentCmd);
            
    let uppercaseCmd = vscode.commands.registerCommand('jjstoolbar.caseUpper', () => {
        vscode.commands.executeCommand('editor.action.transformToUppercase');
    });
    context.subscriptions.push(uppercaseCmd);

    let lowercaseCmd = vscode.commands.registerCommand('jjstoolbar.caseLower', () => {
        vscode.commands.executeCommand('editor.action.transformToLowercase');
    });
    context.subscriptions.push(lowercaseCmd);

    let changeLanguageModeCmd = vscode.commands.registerCommand('jjstoolbar.languageMode', () => {
        vscode.commands.executeCommand('workbench.action.editor.changeLanguageMode');
    });
    context.subscriptions.push(changeLanguageModeCmd);
}

/**
 * registers 3rd party related commands
 *
 * @param {vscode.ExtensionContext} context
 */
function registerExternalExtensionCommands(context: vscode.ExtensionContext) {
    /*mohsen1.prettify-json*/
    let prettifyJsonCmd = vscode.commands.registerCommand('jjstoolbar.prettifyJson', () => {
        vscode.commands.executeCommand('extension.prettifyJSON');
    });
    context.subscriptions.push(prettifyJsonCmd);

    /*dotjoshjohnson.xml*/
    let formatXmlCmd = vscode.commands.registerCommand('jjstoolbar.formatXml', () => {        
        vscode.commands.executeCommand('xmlTools.formatAsXml');
    });
    context.subscriptions.push(formatXmlCmd);
}


/**
 * called on extension unload
 *
 * @export
 */
export function deactivate() {}
