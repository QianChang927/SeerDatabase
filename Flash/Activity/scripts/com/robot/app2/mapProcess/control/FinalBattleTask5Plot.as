package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.mapProcess.MapProcess_11804;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class FinalBattleTask5Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var curIndex:int;
      
      private var tcdc:TimeCountdownComponent;
      
      private var npcDialogIds:Array;
      
      private var showTips:int = 0;
      
      public function FinalBattleTask5Plot()
      {
         super("2019/0201/FinalBattleTask5Plot");
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
         this.updateState();
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var name:String = null;
         var temp:int = 0;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               closeMap();
               break;
            case "item_" + index:
               closeEvent();
               ui["depth_mc"]["ani"].x = e.target.x;
               ui["depth_mc"]["ani"].y = e.target.y;
               ui["depth_mc"]["ani"].visible = true;
               AnimateManager.playMcAnimateWithPromis(ui["depth_mc"],MovieClip(ui["depth_mc"]).currentFrame,"ani").then(function():void
               {
                  ui["depth_mc"]["ani"].visible = false;
                  SocketConnection.sendWithPromise(43307,[5,(MapProcess_11804.curMapIndex - 1) * 5 + index]).then(function():void
                  {
                     showTips = index;
                     updateState();
                  });
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "fight_" + index:
               if(MapProcess_11804.curMapIndex == 1)
               {
                  temp = 15211 - 1;
               }
               else
               {
                  temp = 15236 - 1;
               }
               FightManager.fightNoMapBoss("",temp + index);
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
                  "value":[[this.npcDialogIds[0],"哎呀，被发现了！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"不要得意，我们的大部队早已安全撤离，哈哈哈！","可恶！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[4,(MapProcess_11804.curMapIndex - 1) * 5 + 3]);
               }).then(function():void
               {
                  closeMap();
               });
         }
      }
      
      override protected function updateState() : void
      {
         var count:int = 0;
         ui["depth_mc"]["ani"].visible = false;
         ui["depth_mc"]["ani"].gotoAndStop(1);
         KTool.getMultiValue([10607],function(param1:Array):void
         {
            openEvent();
            count = 0;
            param1[1] = param1[0] >> 16 & 31;
            param1[0] = param1[0] >> 24 & 31;
            var _loc2_:int = 1;
            while(_loc2_ <= 5)
            {
               if(KTool.getBit(param1[0],_loc2_) == 1)
               {
                  ui["depth_mc"]["item_" + _loc2_].visible = false;
               }
               else if(KTool.getBit(param1[1],_loc2_) == 1)
               {
                  CommonUI.setEnabled(ui["depth_mc"]["item_" + _loc2_],false,false);
               }
               else
               {
                  CommonUI.setEnabled(ui["depth_mc"]["item_" + _loc2_],true,false);
               }
               if(KTool.getBit(param1[1],_loc2_) == 1 && KTool.getBit(param1[0],_loc2_) == 0)
               {
                  ui["depth_mc"]["fight_" + _loc2_].visible = true;
               }
               else
               {
                  ui["depth_mc"]["fight_" + _loc2_].visible = false;
               }
               if(KTool.getBit(param1[0],_loc2_) == 1)
               {
                  ++count;
               }
               _loc2_++;
            }
            if(count >= 5)
            {
               onNpcClick(2);
            }
            else if(KTool.getBit(param1[1],showTips) == 1)
            {
               onNpcClick(1);
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
