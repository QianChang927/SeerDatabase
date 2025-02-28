package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.TimeCountdownComponent;
   import com.robot.app2.control.StaticObjectControll;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.mapProcess.MapProcess_11804;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.MouseEvent;
   
   public class FinalBattleTask7Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var tcdc:TimeCountdownComponent;
      
      private var npcDialogIds:Array;
      
      public function FinalBattleTask7Plot()
      {
         super("2019/0201/FinalBattleTask7Plot");
      }
      
      override public function init(param1:* = null) : void
      {
         var arr:* = param1;
         this.bossIds = arr[0];
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
         var _loc3_:String = null;
         var _loc4_:int = 0;
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "close":
               closeMap();
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "fight_" + _loc2_:
               if(MapProcess_11804.curMapIndex == 1)
               {
                  _loc4_ = 15218 - 1;
               }
               else
               {
                  _loc4_ = 15243 - 1;
               }
               FightManager.fightNoMapBoss("",_loc4_ + _loc2_);
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([10608],function(param1:Array):void
         {
            param1[0] = param1[0] >> 14 & 63;
            var _loc2_:int = 1;
            while(_loc2_ <= 6)
            {
               if(KTool.getBit(param1[0],_loc2_) == 1)
               {
                  ui["depth_mc"]["boss_" + _loc2_].visible = false;
                  ui["depth_mc"]["fight_" + _loc2_].visible = false;
                  ui["depth_mc"]["txt_" + _loc2_].visible = false;
               }
               else
               {
                  ui["depth_mc"]["boss_" + _loc2_].visible = true;
                  ui["depth_mc"]["fight_" + _loc2_].visible = true;
                  ui["depth_mc"]["txt_" + _loc2_].visible = true;
                  ui["depth_mc"]["txt_" + _loc2_].text = PetXMLInfo.getName(petIds[_loc2_ - 1]);
                  getBossSprite(petIds[_loc2_ - 1],ui["depth_mc"]["boss_" + _loc2_]);
               }
               _loc2_++;
            }
            if(param1[0] == 63)
            {
               onNpcClick(2);
            }
            else if(StaticObjectControll.getObjectByKey("FinalBattleTask") as int == 0 && param1[0] == 0)
            {
               onNpcClick(1);
               StaticObjectControll.setObjectByKey("FinalBattleTask",1);
            }
         });
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
                  "value":[[3993,"敌袭！敌袭！抄好家伙，守护物资，快！","你们和这批货，一个都跑不掉！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3993,"川大人……我们……对不起你……","魔界必胜！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[4,(MapProcess_11804.curMapIndex - 1) * 5 + 5]);
               }).then(function():void
               {
                  closeMap();
               });
         }
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
