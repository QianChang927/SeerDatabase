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
   
   public class FinalBattleTask6Plot extends PlotUITask
   {
       
      
      private var bossIds:Array;
      
      private var petIds:Array;
      
      private var tcdc:TimeCountdownComponent;
      
      private var npcDialogIds:Array;
      
      public function FinalBattleTask6Plot()
      {
         super("2019/0201/FinalBattleTask6Plot");
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
         ui["btn_mc"]["txt_1"].text = PetXMLInfo.getName(this.petIds[0]);
         ui["btn_mc"]["txt_2"].text = PetXMLInfo.getName(this.petIds[1]);
         ui["depth_mc"]["txt_3"].text = PetXMLInfo.getName(this.petIds[2]);
         getBossSprite(this.petIds[2],ui["depth_mc"]["boss_3"]);
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
                  _loc4_ = 15216 - 1;
               }
               else
               {
                  _loc4_ = 15241 - 1;
               }
               FightManager.fightNoMapBoss("",_loc4_ + _loc2_);
               break;
            case "npc":
               if(ui["depth_mc"]["boss_1"].visible == false && ui["depth_mc"]["boss_2"].visible == false)
               {
                  this.onNpcClick(2);
               }
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
                  "value":[[this.npcDialogIds[0],"你终于来了，勇士。快救我出去，我不想死在这里！","没问题！"]]
               }).doAction().then(openEvent);
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcDialogIds[0],"还好有你在，不然我可能就再也见不到大家了。谢谢你！","放心吧，你安全了！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[4,(MapProcess_11804.curMapIndex - 1) * 5 + 4]);
               }).then(function():void
               {
                  closeMap();
               });
         }
      }
      
      override protected function updateState() : void
      {
         KTool.getMultiValue([10608],function(param1:Array):void
         {
            param1[0] = param1[0] >> 12 & 3;
            var _loc2_:int = 1;
            while(_loc2_ <= 2)
            {
               if(KTool.getBit(param1[0],_loc2_) == 1)
               {
                  ui["depth_mc"]["boss_" + _loc2_].visible = false;
                  ui["depth_mc"]["fight_" + _loc2_].visible = false;
                  ui["depth_mc"]["txt_" + _loc2_].visible = false;
                  ui["depth_mc"]["arrow_" + _loc2_].visible = false;
               }
               else
               {
                  ui["depth_mc"]["boss_" + _loc2_].visible = true;
                  ui["depth_mc"]["fight_" + _loc2_].visible = true;
                  ui["depth_mc"]["txt_" + _loc2_].visible = true;
                  ui["depth_mc"]["arrow_" + _loc2_].visible = true;
                  ui["depth_mc"]["txt_" + _loc2_].text = PetXMLInfo.getName(petIds[_loc2_ - 1]);
                  getBossSprite(petIds[_loc2_ - 1],ui["depth_mc"]["boss_" + _loc2_]);
               }
               _loc2_++;
            }
            ui["depth_mc"]["arrow_3"].visible = false;
            if(param1[0] == 3)
            {
               ui["depth_mc"]["arrow_3"].visible = true;
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
         if(this.tcdc != null)
         {
            this.tcdc.destroy();
            this.tcdc = null;
         }
         super.destroy();
      }
   }
}
