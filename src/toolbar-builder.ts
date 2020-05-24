import * as vscode from 'vscode';

/**
 * The intent and purpose of this class is to enable toolbars and menus to be 
 * built programmatically by this extension
 *
 * @export
 * @class toolbarBuilder
 */
export class toolbarBuilder {
        
    /**     
     * 
     * This method currently does nothing because there is no vscode extension API support
     * for programmatic write access to extension contributes content
     * 
     * contributes behaviour is only settable declaratively in package.json
     * 
     * This comment reflects the reality of the vscode extension API in vscode v1.45.1 (April 2020)
     *
     * @memberof toolbarBuilder
     */
    public build(): void {        
        const toolbarConfig = vscode.workspace.getConfiguration('jjs-vscode-toolbar');                
        const thisExtension = vscode.extensions.getExtension("jjssoftware.jjs-vscode-toolbar");  
    }
}