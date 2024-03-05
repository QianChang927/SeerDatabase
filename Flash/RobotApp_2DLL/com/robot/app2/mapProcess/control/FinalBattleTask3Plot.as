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
   
   public class FinalBattleTask3Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var curIndex:int;
      
      private var npcDialogIds:Array;
      
      private var tcdc:TimeCountdownComponent;
      
      private var bossNum:Array;
      
      private var bossIndex:Array;
      
      private var allPets:Array;
      
      public function FinalBattleTask3Plot()
      {
         this.bossNum = [2,3,5];
         this.bossIndex = [0,2,5];
         this.allPets = [3993];
         super("2019/0201/FinalBattleTask3Plot");
      }
      
      override public function init(param1:* = null) : void
      {
         var i:int;
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
         i = 1;
         while(i <= 5)
         {
            ui["depth_mc"]["boss_" + i].addEventListener(MouseEvent.MOUSE_DOWN,this.onBossClick);
            i++;
         }
         ui["btn_mc"]["txt_2"].text = PetXMLInfo.getName(this.petIds[0]);
         ui["depth_mc"]["txt_0"].text = PetXMLInfo.getName(this.petIds[0]);
         getBossSprite(this.petIds[0],ui["depth_mc"]["boss_0"]);
         this.updateState();
      }
      
      protected function onBossClick(param1:MouseEvent) : void
      {
         var _loc3_:String = null;
         var _loc4_:int = 0;
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         switch(param1.currentTarget.name)
         {
            case "boss_" + _loc2_:
               if(MapProcess_11804.curMapIndex == 1)
               {
                  _loc4_ = 15200;
               }
               else
               {
                  _loc4_ = 15225;
               }
               FightManager.fightNoMapBoss("",_loc4_ + this.bossIndex[this.curIndex - 1] + _loc2_);
         }
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
            case "boss_" + _loc2_:
               if(MapProcess_11804.curMapIndex == 1)
               {
                  _loc4_ = 15200;
               }
               else
               {
                  _loc4_ = 15225;
               }
               FightManager.fightNoMapBoss("",_loc4_ + this.bossIndex[this.curIndex - 1] + _loc2_);
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
                  "value":[[this.npcDialogIds[0],"你终于来了，勇士。对方绝对不会放过这个机会，请你在我恢复前，尽量挡住它们！","没问题！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3993,"哇呀呀，再给我上！"]]
               }).doAction().then(openEvent);
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3993,"哇呀呀，再给我上！"]]
               }).doAction().then(openEvent);
               break;
            case 4:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3993,"这……遇到硬茬子了！可恶，兄弟们，我们先撤！","口出狂言，下次要你好看！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[4,(MapProcess_11804.curMapIndex - 1) * 5 + 1]);
               }).then(function():void
               {
                  openEvent();
                  closeMap();
               });
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([10605,10610,10611],function(param1:Array):void
         {
            param1[0] = param1[0] >> 20 & 1023;
            var _loc2_:Array = [1,1,1,1,1,1];
            if((param1[0] & 31) == 31)
            {
               curIndex = 3;
               _loc2_[1] = param1[2] & 15;
               _loc2_[2] = param1[2] >> 4 & 15;
               _loc2_[3] = param1[2] >> 8 & 15;
               _loc2_[4] = param1[2] >> 12 & 15;
               _loc2_[5] = param1[2] >> 16 & 15;
            }
            else if((param1[0] & 3) == 3)
            {
               curIndex = 2;
               _loc2_[1] = param1[1] >> 8 & 15;
               _loc2_[2] = param1[1] >> 12 & 15;
               _loc2_[3] = param1[1] >> 16 & 15;
            }
            else
            {
               curIndex = 1;
               _loc2_[1] = param1[1] & 15;
               _loc2_[2] = param1[1] >> 4 & 15;
            }
            var _loc3_:int = 1;
            while(_loc3_ <= 5)
            {
               ui["depth_mc"]["fight_" + _loc3_].visible = false;
               if(_loc3_ > bossNum[curIndex - 1] || KTool.getBit(param1[0],_loc3_ + bossIndex[curIndex - 1]) == 1)
               {
                  ui["depth_mc"]["txt_" + _loc3_].visible = false;
                  ui["depth_mc"]["boss_" + _loc3_].visible = false;
               }
               else
               {
                  ui["depth_mc"]["txt_" + _loc3_].visible = true;
                  ui["depth_mc"]["boss_" + _loc3_].visible = true;
                  ui["depth_mc"]["boss_" + _loc3_].buttonMode = true;
                  ui["depth_mc"]["txt_" + _loc3_].text = PetXMLInfo.getName(allPets[_loc2_[_loc3_] - 1]);
                  getBossSprite(allPets[_loc2_[_loc3_] - 1],ui["depth_mc"]["boss_" + _loc3_]);
               }
               _loc3_++;
            }
            ui["btn_mc"]["txt_1"].text = curIndex + "/3";
            if(curIndex == 2 && param1[0] == 3)
            {
               onNpcClick(2);
            }
            else if(curIndex == 3 && param1[0] == 31)
            {
               onNpcClick(3);
            }
            else if(param1[0] == 1023)
            {
               onNpcClick(4);
            }
            else if(StaticObjectControll.getObjectByKey("FinalBattleTask") as int == 0 && param1[0] == 0)
            {
               onNpcClick(1);
               StaticObjectControll.setObjectByKey("FinalBattleTask",1);
            }
         });
      }
      
      override public function destroy() : void
      {
         var _loc1_:int = 1;
         while(_loc1_ <= 5)
         {
            ui["depth_mc"]["boss_" + _loc1_].removeEventListener(MouseEvent.MOUSE_DOWN,this.onBossClick);
            _loc1_++;
         }
         if(this.tcdc != null)
         {
            this.tcdc.destroy();
            this.tcdc = null;
         }
         super.destroy();
      }
   }
}
