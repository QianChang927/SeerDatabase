package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class XingGuangBeiPrePanel extends ActivityModel
   {
      private var zyBoo:Boolean;
      
      private var yyTime:int;
      
      private var team:String;
      
      private var teamIdx:int;
      
      private var num:int;
      
      public function XingGuangBeiPrePanel()
      {
         super();
         resUrl = "2024/1004/XingGuangBeiPrePanel";
         configUrl = "2024/1004/XingGuangBeiPre";
      }
      
      override public function show() : void
      {
         if(!SystemTimerManager.getIsInActivity("20241004","*"))
         {
            Alarm.show("不在活动时间内!");
            this.hide();
            return;
         }
         super.show();
         _ui["movie"].gotoAndStop(1);
         _ui["movie"]["mc"].gotoAndStop(1);
         _ui["movie"].visible = false;
      }
      
      override protected function updatePanel() : void
      {
         var globalKey:int;
         this.yyTime = getValue("yyTime");
         this.num = getValue("itemNum");
         this.teamIdx = getValue("teamIdx");
         this.zyBoo = this.teamIdx > 0;
         _ui["btnmc"].gotoAndStop(this.zyBoo ? 2 : 1);
         this.team = getValue("teams")[this.teamIdx];
         _ui["txt"].text = this.yyTime + "/5";
         _ui["mc"].gotoAndStop(this.teamIdx + 1);
         _ui["btnmc1"].gotoAndStop(this.yyTime >= 5 ? 2 : 1);
         globalKey = int(getValue("global"));
         KTool.getGlobalSubkeyValues(globalKey,[1,2,3],function(arr:Array):void
         {
            var j:int = 0;
            if(Boolean(_ui))
            {
               for(j = 0; j < 3; j++)
               {
                  if(j < arr.length)
                  {
                     _ui["mc"]["num_" + j].text = arr[j];
                  }
                  else
                  {
                     _ui["mc"]["num_" + j].text = "0";
                  }
               }
            }
         });
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               break;
            case "zy":
               SocketConnection.sendByQueue(41299,[1,1],function(e:SocketEvent):void
               {
                  var byte:ByteArray = e.data as ByteArray;
                  var result:int = int(byte.readUnsignedInt());
                  moviePlay(result);
               });
               break;
            case "yy":
               if(!this.zyBoo)
               {
                  doAction("alarm");
                  return;
               }
               doAction("alert",this.team).then(function():void
               {
                  if(num < 200000)
                  {
                     doAction("alarm2");
                     return;
                  }
                  SocketConnection.sendByQueue(41299,[2,1],function(e:SocketEvent):void
                  {
                     doAction("alarm1",team);
                     refresh();
                  });
               });
               break;
         }
      }
      
      private function moviePlay(value:int) : void
      {
         LevelManager.closeAllMouseEvent();
         _ui["movie"].visible = true;
         _ui["movie"].gotoAndStop(value);
         AnimateManager.playMcAnimate(_ui["movie"]["mc"],"1","",function():void
         {
            _ui["movie"].visible = false;
            LevelManager.openMouseEvent();
            refresh();
         });
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

