//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        console.log("Main constructor");
       
        this.touchEnabled = true;
        this.touchChildren = true;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
       
    }
    private testc:TestComponent;
    private onTouchCB(e:egret.TouchEvent)
    {
        if(this.testc != null && this.testc.parent != null)
        {
           this.testc.parent.removeChild(this.testc);
        }
    }
    private onAddToStage(event: egret.Event) {
        
        WindowManager.getInstance();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchCB,this);
        EventUtil.addEventListener("SCENE_LOADED",this.onSceneLoaded);
        this.testc = new TestComponent();
        this.addChild(this.testc);
        this.createGameScene();

        GlobalVar.windowLayer = new egret.DisplayObjectContainer();
        this.addChild(GlobalVar.windowLayer);
         

        EventUtil.callFunc(EventDefine.WIN_SHOW_HIDE,WinParam.getWinParam("BagWindow",WinParam.ACTION_OPEN,1));


    }
    private onSceneLoaded()
    {
        console.log("onSceneLoaded");
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
     
        EventUtil.callFunc("SCENE_LOADED");

    }

  
}