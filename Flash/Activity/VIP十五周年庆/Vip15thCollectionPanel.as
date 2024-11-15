package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class Vip15thCollectionPanel extends ActivityModel
   {
      private var rewarded:Boolean;
      
      public function Vip15thCollectionPanel()
      {
         super();
         resUrl = "2024/1115/Vip15thCollectionPanel";
         configUrl = "2024/1115/Vip15thCollection";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1115VIP15周年庆典","进入VIP15周年庆集合面板","2024运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.rewarded = getValue("value") == 1;
         if(Boolean(_ui["btnmc"]))
         {
            _ui["btnmc"].gotoAndStop(this.rewarded ? 2 : 1);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var index:int = 0;
         var arr:Array = null;
         var str:String = null;
         var btnName:String = e.target.name;
         index = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               break;
            case "go_" + index:
               StatManager.sendStat2014("1115VIP15周年庆典","点击【" + index + "】按钮","2024运营活动");
               arr = getValue("panels");
               str = arr[index];
               this.hide();
               ModuleManager.showAppModule(str);
               break;
            case "reward":
               SocketConnection.sendByQueue(41388,[80,0],function(e:SocketEvent):void
               {
                  refresh();
               });
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

