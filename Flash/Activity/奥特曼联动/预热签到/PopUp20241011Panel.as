package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import org.taomee.events.SocketEvent;
   
   public class PopUp20241011Panel extends BaseModule
   {
      private var signed:Boolean;
      
      private var signBoos:Array;
      
      public function PopUp20241011Panel()
      {
         super();
         resUrl = "2024/1011/PopUp20241011Panel";
      }
      
      override public function show() : void
      {
         super.show();
         eventCom.addClickEvent(_ui,this.clickHandle);
         for(var j:int = 0; j < 7; j++)
         {
            _ui["flag_" + j].visible = false;
         }
         this.update();
      }
      
      private function playmovie() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("zhouyufull"),this.playover);
      }
      
      private function playover() : void
      {
         ModuleManager.showAppModule("PopUp20241011Panel");
      }
      
      private function update(fun:Function = null) : void
      {
         LevelManager.closeAllMouseEvent();
         KTool.getMultiValue([124288,203156],function(arr:Array):void
         {
            LevelManager.openMouseEvent();
            if(_ui == null)
            {
               return;
            }
            signed = arr[1] == 1;
            signBoos = [];
            for(var j:int = 0; j < 7; j++)
            {
               _ui["flag_" + j].visible = j < arr[0];
               signBoos.push(j == arr[0]);
               _ui["mc_" + j].gotoAndStop(j == arr[0] && arr[1] == 0 ? 2 : 1);
               _ui["r_" + j].visible = j == arr[0] && arr[1] == 0;
               CommonUI.setEnabled(_ui["btn_" + j],j == arr[0] && arr[1] == 0);
            }
         });
      }
      
      private function clickHandle(e:MouseEvent) : void
      {
         var isWeseer:Boolean = false;
         var url:String = null;
         var obj:Object = null;
         var ua:String = null;
         var appName:String = null;
         var pageName:String = null;
         var channel:String = null;
         var ename:String = e.target.name;
         var index:int = int(ename.split("_")[1]);
         switch(ename)
         {
            case "close":
               this.hide();
               break;
            case "go":
               StatManager.sendStat2014("1011奥特曼联动预热活动","点击跳转至专题站","2024运营活动");
               isWeseer = false;
               if(ExternalInterface.available)
               {
                  ua = ExternalInterface.call("navigator.userAgent.toLowerCase");
                  appName = ExternalInterface.call("navigator.appName.toLowerCase");
                  pageName = ExternalInterface.call("window.location.pathname.toLowerCase");
                  obj = ExternalInterface.call("getUrlParams");
                  channel = "";
                  if(Boolean(obj) && Boolean(obj.hasOwnProperty("from")))
                  {
                     if(obj["from"] == "we_seer")
                     {
                        isWeseer = true;
                     }
                  }
               }
               url = "https://seer.61.com/events/seer_ultraman_activity/";
               if(isWeseer)
               {
                  url = "https://seer.61.com/events/seer_ultraman_activity/?w=960&h=560";
               }
               navigateToURL(new URLRequest(url),"_blank");
               break;
            case "btn_" + index:
               if(this.signed)
               {
                  return;
               }
               if(!this.signBoos[index])
               {
                  return;
               }
               SocketConnection.sendByQueue(41900,[88,index + 1],function(e:SocketEvent):void
               {
                  update();
               });
               break;
         }
      }
      
      override public function hide() : void
      {
         this.signBoos = null;
         super.hide();
      }
   }
}

