package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.mapProcess.MapProcess_11804;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class FinalBattleTask4Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var curIndex:int;
      
      private var tcdc:TimeCountdownComponent;
      
      private var hasItem:int = 0;
      
      private var npcDialogIds:Array;
      
      public function FinalBattleTask4Plot()
      {
         super("2019/0201/FinalBattleTask4Plot");
      }
      
      override public function init(param1:* = null) : void
      {
         var arr:* = param1;
         this.petIds = arr[1];
         this.npcDialogIds = arr[2];
         ui["btn_mc"]["txt_3"].text = "x" + arr[3];
         this.tcdc = new TimeCountdownComponent(ui["btn_mc"]["time"]);
         this.tcdc.initialSeconds = 3600 - SystemTimerManager.sysDate.minutes * 60 - SystemTimerManager.sysDate.seconds;
         this.tcdc.start(function():void
         {
            closeMap();
         });
         ui["depth_mc"]["txt_" + 1].text = PetXMLInfo.getName(this.petIds[0]);
         getBossSprite(this.petIds[0],ui["depth_mc"]["boss_1"]);
         this.updateState();
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var name:String = null;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               closeMap();
               break;
            case "item_" + index:
               if(this.hasItem > 0)
               {
                  Alarm.show("将它交还给" + PetXMLInfo.getName(this.petIds[0]) + "吧！");
                  break;
               }
               MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
               {
                  ui["depth_mc"]["bar_" + index].visible = true;
                  closeEvent();
                  AnimateManager.playMcAnimateWithPromis(ui["depth_mc"],MovieClip(ui["depth_mc"]).currentFrame,"bar_" + index).then(function():void
                  {
                     hasItem = index;
                     openEvent();
                     Alarm.show("将它交还给" + PetXMLInfo.getName(petIds[0]) + "吧！");
                     updateState();
                  });
               });
               break;
            case "npc":
               MainManager.actorModel.moveAndAction(resetPos(e.target as DisplayObject),function():void
               {
                  if(hasItem > 0)
                  {
                     closeEvent();
                     Alarm.show("你提交了一份物资");
                     SocketConnection.sendWithPromise(43307,[6,(MapProcess_11804.curMapIndex - 1) * 5 + hasItem]).then(function():void
                     {
                        hasItem = 0;
                        openEvent();
                        updateState();
                     });
                  }
               });
         }
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var npcId:int = param1;
         closeEvent();
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"你终于来了，勇士。我们需要把这些物资送到前线去，请你帮我们一把！","没问题！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"齐活了！谢谢你！","不客气！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[4,(MapProcess_11804.curMapIndex - 1) * 5 + 2]);
               }).then(function():void
               {
                  closeMap();
               });
         }
      }
      
      override protected function updateState() : void
      {
         var count:int = 0;
         KTool.getMultiValue([10607],function(param1:Array):void
         {
            count = 0;
            param1[0] = param1[0] >> 12 & 31;
            var _loc2_:int = 1;
            while(_loc2_ <= 5)
            {
               if(KTool.getBit(param1[0],_loc2_) == 1 || _loc2_ == hasItem)
               {
                  ui["depth_mc"]["item_" + _loc2_].visible = false;
                  ui["depth_mc"]["bar_" + _loc2_].visible = false;
                  ++count;
               }
               else
               {
                  ui["depth_mc"]["item_" + _loc2_].visible = true;
                  ui["depth_mc"]["bar_" + _loc2_].visible = false;
               }
               _loc2_++;
            }
            if(ui["depth_mc"]["arrow"])
            {
               ui["depth_mc"]["arrow"].visible = false;
            }
            if(count >= 5 && hasItem == 0)
            {
               onNpcClick(2);
            }
            else if(StaticObjectControll.getObjectByKey("FinalBattleTask") as int == 0 && count == 0)
            {
               onNpcClick(1);
               StaticObjectControll.setObjectByKey("FinalBattleTask",1);
            }
         });
      }
      
      override public function destroy() : void
      {
         if(this.tcdc != null)
         {
            this.tcdc.destroy();
            this.tcdc = null;
         }
         super.destroy();
      }
   }
}
